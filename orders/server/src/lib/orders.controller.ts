import { Controller } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders-server')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}
}
