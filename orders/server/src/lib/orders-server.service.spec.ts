import { Test } from '@nestjs/testing';
import { OrdersServerService } from './orders-server.service';

describe('OrdersServerService', () => {
  let service: OrdersServerService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [OrdersServerService],
    }).compile();

    service = module.get(OrdersServerService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
