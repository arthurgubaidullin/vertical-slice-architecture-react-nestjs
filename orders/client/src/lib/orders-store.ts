import * as RD from '@devexperts/remote-data-ts';
import * as UUID from '@org/uuid-v4';
import { observable, runInAction } from 'mobx';
import { Order } from './order';

const orders: ReadonlyArray<Order> = [
  {
    id: UUID.randomUUID(),
    goods: 'Awesomeness',
    quantity: 1,
    total: 1.05,
  },
  {
    id: UUID.randomUUID(),
    goods: 'Awesomeness',
    quantity: 10,
    total: 100,
  },
  {
    id: UUID.randomUUID(),
    goods: 'Awesomeness',
    quantity: 3,
    total: 146,
  },
];

export const create = () => {
  const orders$ = observable.box<RD.RemoteData<Error, ReadonlyArray<Order>>>(
    RD.initial
  );

  runInAction(() => orders$.set(RD.pending));

  setTimeout(() => {
    orders$.set(RD.success(orders));
  }, 3000);

  return { get: () => orders$.get() };
};
