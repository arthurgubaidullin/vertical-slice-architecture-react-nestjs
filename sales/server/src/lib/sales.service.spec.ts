import { Test } from '@nestjs/testing';
import { SalesService } from './sales.service';

describe('SalesService', () => {
  let service: SalesService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [SalesService],
    }).compile();

    service = module.get(SalesService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
