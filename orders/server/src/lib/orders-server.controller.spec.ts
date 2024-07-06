import { Test } from '@nestjs/testing';
import { OrdersServerController } from './orders-server.controller';
import { OrdersServerService } from './orders-server.service';

describe('OrdersServerController', () => {
  let controller: OrdersServerController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [OrdersServerService],
      controllers: [OrdersServerController],
    }).compile();

    controller = module.get(OrdersServerController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
