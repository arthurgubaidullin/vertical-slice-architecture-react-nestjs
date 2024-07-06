import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationsModule } from '@org/notifications-nest-module';
import { SalesServerModule } from '@org/sales-nest-module';

@Module({
  imports: [NotificationsModule, SalesServerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
