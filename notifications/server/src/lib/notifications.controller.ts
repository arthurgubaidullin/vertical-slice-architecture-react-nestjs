import { Controller } from '@nestjs/common';
import { NotificationsService } from './notifications.service';

@Controller('notifications-nest-module')
export class NotificationsController {
  constructor(private NotificationsService: NotificationsService) {}
}
