import { Controller } from '@nestjs/common';
import { OrdersServerService } from './orders-server.service';

@Controller('orders-server')
export class OrdersServerController {
  constructor(private ordersServerService: OrdersServerService) {}
}
