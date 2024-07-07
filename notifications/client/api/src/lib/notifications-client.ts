import { ExtractedNotificationList } from '@org/extracted-notification';
import * as E from 'fp-ts/Either';
import { pipe } from 'fp-ts/function';
import * as TE from 'fp-ts/TaskEither';
import { failure } from 'io-ts/PathReporter';

const list = () =>
  pipe(
    TE.tryCatch(
      () => fetch('/api/notifications', { credentials: 'omit' }),
      E.toError
    ),
    TE.chainW((response) => TE.tryCatch(() => response.json(), E.toError)),
    TE.chainEitherKW((data) =>
      pipe(
        data,
        ExtractedNotificationList.decode,
        E.mapLeft(failure),
        E.mapLeft(E.toError)
      )
    )
  );

export const create = () => ({
  list,
});
