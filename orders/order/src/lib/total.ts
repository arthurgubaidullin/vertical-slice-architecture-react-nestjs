import * as E from 'fp-ts/Either';
import { pipe } from 'fp-ts/function';

export const create = (total: number) =>
  pipe(
    total,
    E.fromPredicate(
      (n) => 0.01 < n,
      () => new Error('Invalid field `quantity`.')
    )
  );
