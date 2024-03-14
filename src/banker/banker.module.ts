import { Module } from '@nestjs/common';
import { BankerService } from './banker.service';
import { BankerController } from './banker.controller';

@Module({
  providers: [BankerService],
  controllers: [BankerController]
})
export class BankerModule {}
