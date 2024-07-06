import { NewOrderForm } from '@org/new-order-form';
import { observable } from 'mobx';

export const create = () => ({
  add: (newOrderForm: NewOrderForm) => {
    console.log('New order form received.', newOrderForm);
  },
  list: () => {
    const orders$ = observable.box(null);

    return { get: () => orders$.get() };
  },
});
