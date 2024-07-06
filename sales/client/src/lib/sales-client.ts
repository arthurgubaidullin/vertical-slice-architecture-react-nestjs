import { Context, createContext, useState } from 'react';
import * as NewOrderForm from './new-order-form';

export type SalesClient = ReturnType<typeof create>;

export const create = () => ({
  newOrderForm: {
    useStore: (id: string) => {
      const [form$] = useState(() => NewOrderForm.create(id));
      return form$;
    },
  },
});

export const context: Context<SalesClient> = createContext(create());
