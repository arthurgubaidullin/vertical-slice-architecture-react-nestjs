import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { createOrder } from '@org/create-order';
import { ExtractedOrder } from '@org/extracted-order';
import * as OrderCreated from '@org/order-created-contract';
import { PersistedOrder } from '@org/persisted-order';
import * as E from 'fp-ts/Either';
import { pipe } from 'fp-ts/function';

const db = new Map<string, PersistedOrder>();

@Injectable()
export class OrdersService {
  constructor(private eventEmitter: EventEmitter2) {}

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

            this.eventEmitter.emit('order.created', OrderCreated.create(order));
          }
        }
      )
    );
  }

  list(): ReadonlyArray<ExtractedOrder> {
    return Array.from(db.values());
  }
}
