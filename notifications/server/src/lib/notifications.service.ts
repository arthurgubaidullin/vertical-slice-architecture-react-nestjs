import { Injectable } from '@nestjs/common';
import * as OrderCreated from '@org/order-created-contract';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class NotificationsService {
  @OnEvent('order.created')
  onOrderCreated(data: OrderCreated.OrderCreated) {
    console.log(data);
  }
}
