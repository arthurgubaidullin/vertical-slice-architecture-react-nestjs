import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationsModule } from '@org/notifications-nest-module';
import { SalesServerModule } from '@org/sales-server';

@Module({
  imports: [NotificationsModule, SalesServerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
