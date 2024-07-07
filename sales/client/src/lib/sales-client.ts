import { NewOrderForm } from '@org/new-order-form-contract';
import { constVoid } from 'fp-ts/function';
import { createContext, useState } from 'react';
import * as NewOrderFormStore from './new-order-form';

export type SalesClient = ReturnType<typeof create>;

export const create = (orders: { add: (data: NewOrderForm) => void }) => ({
  newOrderForm: {
    useStore: (id: string) => {
      const [form$] = useState(() => NewOrderFormStore.create(id));
      return {
        ...form$,
        send: () => orders.add(form$.get()),
      };
    },
  },
});

export const Context = createContext(create({ add: constVoid }));
