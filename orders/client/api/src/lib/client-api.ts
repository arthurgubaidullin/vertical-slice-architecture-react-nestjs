import { ExtractedOrder } from '@org/extracted-order';
import { NewOrderForm } from '@org/new-order-form';
import * as E from 'fp-ts/Either';
import { pipe } from 'fp-ts/function';
import * as TE from 'fp-ts/TaskEither';
import { readonlyArray } from 'io-ts';
import { failure } from 'io-ts/PathReporter';

const getOrders = () =>
  pipe(
    TE.tryCatch(() => fetch('/api/orders', { credentials: 'omit' }), E.toError),
    TE.chainW((response) => TE.tryCatch(() => response.json(), E.toError)),
    TE.chainEitherKW((data) =>
      pipe(
        data,
        readonlyArray(ExtractedOrder).decode,
        E.mapLeft(failure),
        E.mapLeft(E.toError)
      )
    )
  );

const postOrder = (newOrderForm: NewOrderForm) =>
  pipe(
    TE.tryCatch(
      () =>
        fetch('/api/orders', {
          method: 'POST',
          credentials: 'omit',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newOrderForm),
        }),
      E.toError
    ),
    TE.chainW((response) =>
      TE.tryCatch((): Promise<unknown> => response.json(), E.toError)
    )
  );

export const create = () => ({
  postOrder,
  getOrders,
});
