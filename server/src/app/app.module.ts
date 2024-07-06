import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationsModule } from '@org/notifications-nest-module';

@Module({
  imports: [NotificationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
