import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Post()
  add(@Body() form: unknown) {
    return this.ordersService.add(form);
  }

  @Get()
  list() {
    return this.ordersService.list();
  }
}
