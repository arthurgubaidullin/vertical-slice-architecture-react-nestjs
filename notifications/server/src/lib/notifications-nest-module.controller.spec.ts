import { Test } from '@nestjs/testing';
import { NotificationsNestModuleController } from './notifications-nest-module.controller';
import { NotificationsNestModuleService } from './notifications-nest-module.service';

describe('NotificationsNestModuleController', () => {
  let controller: NotificationsNestModuleController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [NotificationsNestModuleService],
      controllers: [NotificationsNestModuleController],
    }).compile();

    controller = module.get(NotificationsNestModuleController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
