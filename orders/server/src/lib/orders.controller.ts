import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  add(@Body() form: unknown) {
    this.ordersService.add(form);

    return { ok: true };
  }

  @Get()
  list() {
    return this.ordersService.list();
  }
}
