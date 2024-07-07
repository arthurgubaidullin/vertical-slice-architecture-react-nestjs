import { Test } from '@nestjs/testing';
import { OrdersRepository } from './orders.repository';

describe('OrdersRepository', () => {
  let repository: OrdersRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [],
      providers: [OrdersRepository],
    }).compile();

    repository = module.get(OrdersRepository);
  });

  it('should be defined', () => {
    expect(repository).toBeTruthy();
  });
});
