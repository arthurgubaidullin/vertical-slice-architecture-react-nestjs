import * as RD from '@devexperts/remote-data-ts';
import { NewOrderForm } from '@org/new-order-form';
import { ExtractedOrder } from '@org/extracted-order';
import { pipe } from 'fp-ts/function';
import { action, observable, onBecomeObserved } from 'mobx';
import { Order } from './order';
import * as E from 'fp-ts/Either';
import * as TE from 'fp-ts/TaskEither';
import { failure } from 'io-ts/PathReporter';
import { readonlyArray } from 'io-ts';

const getOrders = () =>
  pipe(
    TE.tryCatch(() => fetch(':3000/orders'), E.toError),
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

export const create = () => {
  const orders$ = observable.box<
    RD.RemoteData<Error, ReadonlyArray<ExtractedOrder>>
  >(RD.initial, { deep: false });

  const fetchOrders = async () =>
    pipe(
      getOrders(),
      TE.chainTaskK((orders) => async () => {
        orders$.set(RD.success(orders));
      }),
      TE.orElseFirstTaskK((e) => async () => {
        console.error(e);
        orders$.set(RD.failure(e));
      }),
      (f) => f()
    );

  onBecomeObserved(orders$, () => {
    fetchOrders();
  });

  const add = action((newOrderForm: NewOrderForm) =>
    pipe(
      orders$.get(),
      RD.alt(() => RD.success<Error, ReadonlyArray<Order>>([])),
      RD.map((orders) => [...orders, newOrderForm]),
      (value) => orders$.set(value)
    )
  );

  return {
    get: () => orders$.get(),
    add,
  };
};
