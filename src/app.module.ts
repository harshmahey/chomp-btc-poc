import { Module } from '@nestjs/common';
import { TradeController } from './trade/trade.controller';

import { TradeService } from './trade/trade.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { ApiService } from './trade/api.service';

@Module({
  imports: [HttpModule, ConfigModule.forRoot({
    isGlobal: true,
  })],
  controllers: [TradeController],
  providers: [TradeService, ApiService],
})
export class AppModule { }
