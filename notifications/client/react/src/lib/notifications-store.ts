import * as RD from '@devexperts/remote-data-ts';
import { ExtractedNotification } from '@org/extracted-notification';
import * as ServerApi from '@org/notifications-client-api';
import { pipe } from 'fp-ts/function';
import * as TE from 'fp-ts/TaskEither';
import { action, observable, onBecomeObserved } from 'mobx';

export const create = () => {
  const api = ServerApi.create();

  const notifications$ = observable.box<
    RD.RemoteData<Error, ReadonlyArray<ExtractedNotification>>
  >(RD.initial, { deep: false });

  const fetch = async () =>
    pipe(
      api.list(),
      TE.chainIOK((notifications) =>
        action(() => {
          notifications$.set(RD.success(notifications));
        })
      ),
      TE.orElseFirstIOK((e) =>
        action(() => {
          console.error(e);
          notifications$.set(RD.failure(e));
        })
      ),
      (f) => f()
    );

  onBecomeObserved(notifications$, () => {
    fetch();
  });

  return {
    get: () => notifications$.get(),
  };
};
