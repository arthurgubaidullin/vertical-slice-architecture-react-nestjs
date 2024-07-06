import { Controller } from '@nestjs/common';
import { SalesService } from './sales.service';

@Controller('sales-server')
export class SalesController {
  constructor(private salesServerService: SalesService) {}
}
