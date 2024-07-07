import * as E from 'fp-ts/Either';
import { pipe } from 'fp-ts/function';
import { NonEmptyString } from 'io-ts-types';

export const create = (id: string) =>
  pipe(
    id,
    E.fromPredicate(NonEmptyString.is, () => new Error('Invalid Order ID.'))
  );
