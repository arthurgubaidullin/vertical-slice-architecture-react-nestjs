import { Injectable } from '@nestjs/common';
import { PersistedNotification } from '@org/persisted-notification';

const db = new Map<string, PersistedNotification>();

@Injectable()
export class NotificationsRepository {
  add(notification: PersistedNotification) {
    if (!db.has(notification.id)) {
      db.set(notification.id, notification);
    }
  }

  list(): ReadonlyArray<PersistedNotification> {
    return Array.from(db.values());
  }
}
