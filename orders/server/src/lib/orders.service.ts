import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { createOrder } from '@org/create-order';
import { ExtractedOrder } from '@org/extracted-order';
import * as OrderCreated from '@org/order-created-contract';
import * as E from 'fp-ts/Either';
import { constVoid, pipe } from 'fp-ts/function';
import * as O from 'fp-ts/Option';
import { OrdersRepository } from './orders.repository';

@Injectable()
export class OrdersService {
  constructor(
    private readonly eventEmitter: EventEmitter2,
    private readonly repository: OrdersRepository
  ) {}

  add(form: unknown): void {
    return pipe(
      createOrder(form),
      E.fold(
        (e) => {
          throw e;
        },
        (order) =>
          pipe(
            this.repository.add(order),
            O.fold(constVoid, (order) => {
              this.eventEmitter.emit(
                'order.created',
                OrderCreated.create(order)
              );
            })
          )
      )
    );
  }

  list(): ReadonlyArray<ExtractedOrder> {
    return this.repository.list();
  }
}
