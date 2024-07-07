import * as RD from '@devexperts/remote-data-ts';
import { ExtractedOrder } from '@org/extracted-order';
import { NewOrderForm } from '@org/new-order-form-contract';
import { pipe } from 'fp-ts/function';
import * as TE from 'fp-ts/TaskEither';
import { action, observable, onBecomeObserved } from 'mobx';
import * as ServerApi from '@org/orders-client-api';

export const create = () => {
  const api = ServerApi.create();

  const orders$ = observable.box<
    RD.RemoteData<Error, ReadonlyArray<ExtractedOrder>>
  >(RD.initial, { deep: false });

  const fetchOrders = async () =>
    pipe(
      api.getOrders(),
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
      api.postOrder(newOrderForm),
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
