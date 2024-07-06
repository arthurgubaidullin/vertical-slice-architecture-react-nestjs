import { Test } from '@nestjs/testing';
import { SalesController } from './sales.controller';
import { SalesService } from './sales.service';

describe('SalesController', () => {
  let controller: SalesController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [SalesService],
      controllers: [SalesController],
    }).compile();

    controller = module.get(SalesController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
