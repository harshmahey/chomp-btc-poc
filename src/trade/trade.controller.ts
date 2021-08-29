import { Logger, Controller, Get, Param, Query, Res, HttpStatus } from '@nestjs/common';
import { TradeService } from './trade.service';
import { PriceResponse } from './trade.interface';
import { Response } from 'express';

@Controller()
export class TradeController {
    constructor(private readonly tradeService: TradeService) { }

    private readonly logger = new Logger(TradeController.name);

    @Get('price')
    async getCurrentAssetValue(@Query('asset') asset: string, @Res() res: Response): Promise<PriceResponse> {
        this.logger.debug(`asset value=>${asset}`);
        try {
            let priceInfo = await this.tradeService.getAssetValue(asset);
            this.logger.debug(`priceInfo=>${JSON.stringify(priceInfo)}`);
            res.status(HttpStatus.OK).json(priceInfo);
            return;
        } catch (error) {
            this.logger.debug(`error=>${error}`);
            let errorResponse = { errorMsg: '' };
            if (error != null && error.toString().includes("ERR_")) {
                errorResponse.errorMsg = eval(`process.env.${error}`);
            } else {
                errorResponse.errorMsg = error.message;
            }
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(errorResponse);
            return error;
        }

    }
}
