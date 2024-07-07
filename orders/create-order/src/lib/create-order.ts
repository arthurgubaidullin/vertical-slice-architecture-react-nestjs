import * as NewOrderForm from '@org/new-order-form-contract';
import * as Order from '@org/order';
import { PersistedOrder } from '@org/persisted-order';
import * as E from 'fp-ts/Either';
import { pipe } from 'fp-ts/function';

export const createOrder = (
  newOrderForm: unknown
): E.Either<NewOrderForm.NewOrderFormIsInvalid | Error, PersistedOrder> =>
  pipe(
    newOrderForm,
    NewOrderForm.validate,
    E.chainW((newOrderForm) => Order.create(newOrderForm)),
    E.map((order) => Order.toJSON(order))
  );
