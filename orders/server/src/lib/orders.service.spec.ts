import { Test } from '@nestjs/testing';
import { OrdersService } from './orders.service';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { OrdersRepository } from './orders.repository';

describe('OrdersService', () => {
  let service: OrdersService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [EventEmitterModule.forRoot()],
      providers: [OrdersService, OrdersRepository],
    }).compile();

    service = module.get(OrdersService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
