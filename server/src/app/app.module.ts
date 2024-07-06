import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationsModule } from '@org/notifications-nest-module';
import { SalesModule } from '@org/sales-nest-module';
import { OrdersModule } from '@org/orders-nest-module';

@Module({
  imports: [NotificationsModule, SalesModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
