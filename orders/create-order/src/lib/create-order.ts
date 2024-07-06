import { NewOrderForm } from '@org/new-order-form';
import { PersistedOrder } from '@org/persisted-order';
import * as E from 'fp-ts/Either';
import { pipe } from 'fp-ts/function';
import { failure } from 'io-ts/PathReporter';

class NewOrderFormIsInvalid {
  readonly _tag = 'InvalidNewOrderForm' as const;

  constructor(
    public readonly form: unknown,
    public readonly errors: string[]
  ) {}
}

export const createOrder = (
  newOrderForm: unknown
): E.Either<NewOrderFormIsInvalid, PersistedOrder> =>
  pipe(
    newOrderForm,
    NewOrderForm.decode,
    E.mapLeft(failure),
    E.mapLeft((errors) => new NewOrderFormIsInvalid(newOrderForm, errors))
  );
