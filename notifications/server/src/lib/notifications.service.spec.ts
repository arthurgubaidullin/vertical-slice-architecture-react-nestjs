import { Test } from '@nestjs/testing';
import { NotificationsService } from './notifications.service';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { NotificationsRepository } from './notifications.repository';

describe('NotificationsService', () => {
  let service: NotificationsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [EventEmitterModule.forRoot()],
      providers: [NotificationsService, NotificationsRepository],
    }).compile();

    service = module.get(NotificationsService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
