import { Injectable } from '@nestjs/common';
import * as OrderCreated from '@org/order-created-contract';
import { OnEvent } from '@nestjs/event-emitter';
import { NotificationsRepository } from './notifications.repository';

@Injectable()
export class NotificationsService {
  constructor(
    private readonly notificationsRepository: NotificationsRepository
  ) {}

  @OnEvent('order.created')
  onOrderCreated(data: OrderCreated.OrderCreated) {
    console.log(data);
  }
}
