import { Controller, Get } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { ExtractedNotification } from '@org/extracted-notification';

@Controller('notifications')
export class NotificationsController {
  constructor(private notificationsService: NotificationsService) {}

  @Get()
  list(): ReadonlyArray<ExtractedNotification> {
    return this.notificationsService
      .list()
      .map((v) => ExtractedNotification.encode(v));
  }
}
