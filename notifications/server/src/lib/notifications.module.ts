import { Module } from '@nestjs/common';
import { NotificationsController } from './notifications.controller';
import { NotificationsService } from './notifications.service';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { NotificationsRepository } from './notifications.repository';

@Module({
  imports: [EventEmitterModule],
  controllers: [NotificationsController],
  providers: [NotificationsService, NotificationsRepository],
  exports: [NotificationsService],
})
export class NotificationsModule {}
