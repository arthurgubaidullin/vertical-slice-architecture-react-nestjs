import { Body, Controller, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders-server')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Post('orders')
  add(@Body() form: unknown) {
    return this.ordersService.add(form);
  }
}
