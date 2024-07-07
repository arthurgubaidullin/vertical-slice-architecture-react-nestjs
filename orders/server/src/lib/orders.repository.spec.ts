import { Test } from '@nestjs/testing';
import { OrdersRepository } from './orders.repository';
import { EventEmitterModule } from '@nestjs/event-emitter';

describe('OrdersRepository', () => {
  let repository: OrdersRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [EventEmitterModule.forRoot()],
      providers: [OrdersRepository],
    }).compile();

    repository = module.get(OrdersRepository);
  });

  it('should be defined', () => {
    expect(repository).toBeTruthy();
  });
});
