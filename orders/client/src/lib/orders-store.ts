import * as RD from '@devexperts/remote-data-ts';
import { NewOrderForm } from '@org/new-order-form';
import { pipe } from 'fp-ts/function';
import { action, observable } from 'mobx';
import { Order } from './order';

export const create = () => {
  const orders$ = observable.box<RD.RemoteData<Error, ReadonlyArray<Order>>>(
    RD.initial
  );

  const add = action((newOrderForm: NewOrderForm) =>
    pipe(
      orders$.get(),
      RD.map((orders) => [...orders, newOrderForm]),
      (value) => orders$.set(value)
    )
  );

  return {
    get: () => orders$.get(),
    add,
  };
};
