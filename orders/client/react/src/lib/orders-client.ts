import { NewOrderForm } from '@org/new-order-form';
import * as OrdersStore from './orders-store';
import { createContext } from 'react';

export const create = () => {
  const orders$ = OrdersStore.create();

  return {
    add: (newOrderForm: NewOrderForm) => {
      orders$.add(newOrderForm);
    },
    list: () => orders$.get(),
  };
};

export const Context = createContext(create());
