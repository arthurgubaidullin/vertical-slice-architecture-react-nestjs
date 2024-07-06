import { Test } from '@nestjs/testing';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';

describe('OrdersController', () => {
  let controller: OrdersController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [OrdersService],
      controllers: [OrdersController],
    }).compile();

    controller = module.get(OrdersController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
