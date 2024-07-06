import * as RD from '@devexperts/remote-data-ts';
import { ExtractedOrder } from '@org/extracted-order';
import { NewOrderForm } from '@org/new-order-form';
import * as E from 'fp-ts/Either';
import { pipe } from 'fp-ts/function';
import * as TE from 'fp-ts/TaskEither';
import { readonlyArray } from 'io-ts';
import { failure } from 'io-ts/PathReporter';
import { action, observable, onBecomeObserved } from 'mobx';

const getOrders = () =>
  pipe(
    TE.tryCatch(() => fetch('/api/orders', { credentials: 'omit' }), E.toError),
    TE.chainW((response) => TE.tryCatch(() => response.json(), E.toError)),
    TE.chainEitherKW((data) =>
      pipe(
        data,
        readonlyArray(ExtractedOrder).decode,
        E.mapLeft(failure),
        E.mapLeft(E.toError)
      )
    )
  );

const addOrderToServer = (newOrderForm: NewOrderForm) =>
  pipe(
    TE.tryCatch(
      () =>
        fetch('/api/orders', {
          method: 'POST',
          credentials: 'omit',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newOrderForm),
        }),
      E.toError
    ),
    TE.chainW((response) =>
      TE.tryCatch((): Promise<unknown> => response.json(), E.toError)
    )
  );

export const create = () => {
  const orders$ = observable.box<
    RD.RemoteData<Error, ReadonlyArray<ExtractedOrder>>
  >(RD.initial, { deep: false });

  const fetchOrders = async () =>
    pipe(
      getOrders(),
      TE.chainIOK((orders) =>
        action(() => {
          orders$.set(RD.success(orders));
        })
      ),
      TE.orElseFirstIOK((e) =>
        action(() => {
          console.error(e);
          orders$.set(RD.failure(e));
        })
      ),
      (f) => f()
    );

  const addOrder = async (newOrderForm: NewOrderForm) =>
    pipe(
      addOrderToServer(newOrderForm),
      TE.chainFirstW(() => fetchOrders),
      TE.orElseFirstIOK((e) => () => {
        console.error(e);
      }),
      (f) => f()
    );

  onBecomeObserved(orders$, () => {
    fetchOrders();
  });

  return {
    get: () => orders$.get(),
    add: addOrder,
  };
};
