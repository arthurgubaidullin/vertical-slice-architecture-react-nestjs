import { Test } from '@nestjs/testing';
import { NotificationsController } from './notifications.controller';
import { NotificationsService } from './notifications.service';
import { EventEmitterModule } from '@nestjs/event-emitter';

describe('NotificationsController', () => {
  let controller: NotificationsController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [EventEmitterModule.forRoot()],
      providers: [NotificationsService],
      controllers: [NotificationsController],
    }).compile();

    controller = module.get(NotificationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
