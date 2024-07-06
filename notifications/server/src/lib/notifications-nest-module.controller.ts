import { Controller } from '@nestjs/common';
import { NotificationsNestModuleService } from './notifications-nest-module.service';

@Controller('notifications-nest-module')
export class NotificationsNestModuleController {
  constructor(
    private notificationsNestModuleService: NotificationsNestModuleService
  ) {}
}
