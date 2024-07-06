import { Module } from '@nestjs/common';
import { NotificationsNestModuleController } from './notifications-nest-module.controller';
import { NotificationsNestModuleService } from './notifications-nest-module.service';

@Module({
  controllers: [NotificationsNestModuleController],
  providers: [NotificationsNestModuleService],
  exports: [NotificationsNestModuleService],
})
export class NotificationsNestModuleModule {}
