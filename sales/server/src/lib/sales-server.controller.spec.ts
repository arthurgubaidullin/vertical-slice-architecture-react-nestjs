import { Test } from '@nestjs/testing';
import { SalesServerController } from './sales-server.controller';
import { SalesServerService } from './sales-server.service';

describe('SalesServerController', () => {
  let controller: SalesServerController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [SalesServerService],
      controllers: [SalesServerController],
    }).compile();

    controller = module.get(SalesServerController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
