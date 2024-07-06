import { Context, createContext } from 'react';
import * as NewOrderForm from './new-order-form';

export type SalesClient = ReturnType<typeof create>;

export const create = () => ({
  newOrderForm: NewOrderForm,
});

export const context: Context<SalesClient> = createContext(create());
