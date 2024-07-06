import { Test } from '@nestjs/testing';
import { NotificationsNestModuleService } from './notifications-nest-module.service';

describe('NotificationsNestModuleService', () => {
  let service: NotificationsNestModuleService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [NotificationsNestModuleService],
    }).compile();

    service = module.get(NotificationsNestModuleService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
