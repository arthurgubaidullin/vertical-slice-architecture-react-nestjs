import { Module } from '@nestjs/common';
import { SalesServerController } from './sales-server.controller';
import { SalesServerService } from './sales-server.service';

@Module({
  controllers: [SalesServerController],
  providers: [SalesServerService],
  exports: [SalesServerService],
})
export class SalesServerModule {}
