import { Injectable } from '@nestjs/common';
import { PersistedOrder } from '@org/persisted-order';
import * as O from 'fp-ts/Option';

const db = new Map<string, PersistedOrder>();

@Injectable()
export class OrdersRepository {
  add(order: PersistedOrder): O.Option<PersistedOrder> {
    if (!db.has(order.id)) {
      db.set(order.id, order);

      return O.some(order);
    }

    return O.none;
  }

  list(): ReadonlyArray<PersistedOrder> {
    return Array.from(db.values());
  }
}
