import { Module } from '@nestjs/common';
import { OrdersServerController } from './orders-server.controller';
import { OrdersServerService } from './orders-server.service';

@Module({
  controllers: [OrdersServerController],
  providers: [OrdersServerService],
  exports: [OrdersServerService],
})
export class OrdersServerModule {}
