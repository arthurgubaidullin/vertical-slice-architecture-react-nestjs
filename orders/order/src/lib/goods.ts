import * as E from 'fp-ts/Either';
import { pipe } from 'fp-ts/function';
import { NonEmptyString } from 'io-ts-types';

export const create = (goods: string) =>
  pipe(
    goods,
    E.fromPredicate(
      NonEmptyString.is,
      () => new Error('Invalid field `goods`.')
    )
  );
