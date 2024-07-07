import * as E from 'fp-ts/Either';
import { pipe } from 'fp-ts/function';
import * as t from 'io-ts';

export const create = (quantity: number) =>
  pipe(
    quantity,
    E.fromPredicate(t.Int.is, () => new Error('Invalid field `quantity`.')),
    E.chain(
      E.fromPredicate(
        (n) => 0 < n,
        () => new Error('Invalid field `quantity`.')
      )
    )
  );
