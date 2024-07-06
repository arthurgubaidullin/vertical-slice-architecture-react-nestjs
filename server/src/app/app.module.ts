import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { NotificationsModule } from '@org/notifications-nest-module';
import { OrdersModule } from '@org/orders-nest-module';
import { SalesModule } from '@org/sales-nest-module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    NotificationsModule,
    SalesModule,
    OrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
