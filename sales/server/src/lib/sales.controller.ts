import { Controller } from '@nestjs/common';
import { SalesService } from './sales.service';

@Controller('sales-nest-module')
export class SalesController {
  constructor(private salesServerService: SalesService) {}
}
