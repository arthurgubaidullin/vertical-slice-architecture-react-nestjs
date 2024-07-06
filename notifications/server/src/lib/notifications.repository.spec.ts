import { Test } from '@nestjs/testing';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { NotificationsRepository } from './notifications.repository';

describe('NotificationsRepository', () => {
  let repository: NotificationsRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [EventEmitterModule.forRoot()],
      providers: [NotificationsRepository],
    }).compile();

    repository = module.get(NotificationsRepository);
  });

  it('should be defined', () => {
    expect(repository).toBeTruthy();
  });
});
