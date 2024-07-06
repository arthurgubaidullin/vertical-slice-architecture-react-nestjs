import { Test } from '@nestjs/testing';
import { SalesServerService } from './sales-server.service';

describe('SalesServerService', () => {
  let service: SalesServerService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [SalesServerService],
    }).compile();

    service = module.get(SalesServerService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
