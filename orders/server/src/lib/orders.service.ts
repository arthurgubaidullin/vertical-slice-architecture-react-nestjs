import { Injectable } from '@nestjs/common';
import { createOrder } from '@org/create-order';
import { PersistedOrder } from '@org/persisted-order';
import { ExtractedOrder } from '@org/extracted-order';
import { pipe } from 'fp-ts/function';
import * as E from 'fp-ts/Either';

const db = new Map<string, PersistedOrder>();

@Injectable()
export class OrdersService {
  add(form: unknown) {
    return pipe(
      createOrder(form),
      E.fold(
        (e) => {
          throw e;
        },
        (order) => {
          if (!db.has(order.id)) {
            db.set(order.id, order);
          }
        }
      )
    );
  }

  list(): ReadonlyArray<ExtractedOrder> {
    return Array.from(db.values());
  }
}
