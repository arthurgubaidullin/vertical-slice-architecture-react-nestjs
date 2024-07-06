import { Controller } from '@nestjs/common';
import { SalesServerService } from './sales-server.service';

@Controller('sales-server')
export class SalesServerController {
  constructor(private salesServerService: SalesServerService) {}
}
