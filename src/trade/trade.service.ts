import { Logger, Injectable } from '@nestjs/common';
import { PriceResponse } from './trade.interface';
import { ApiService } from './api.service';

@Injectable()
export class TradeService {
    private readonly logger = new Logger(TradeService.name);
    constructor(private apiService: ApiService) { }


    async getAssetValue(assetId: string): Promise<PriceResponse> {
        try {
            this.logger.debug(`assetId=>${assetId}`);
            var supportedTokenList = process.env.SUPPORTED_TOKENS.split(',');
            if (assetId != null && assetId.trim().length > 0) {
                if (supportedTokenList.includes(assetId)) {
                    this.logger.debug(`supported assetId=>${assetId}`);
                    const priceVal: string = await this.apiService.getPrice(assetId);
                    this.logger.debug(`price val is=> ${priceVal}`);

                    let priceResponse: PriceResponse;

                    priceResponse = {
                        assetId: assetId,
                        value: Number.parseFloat(priceVal).toFixed(1)
                    };
                    return priceResponse;
                } else {
                    this.logger.warn(`Un-Supported AssetId=>${assetId}`);
                    throw ("ERR_NOTSUPPORTED_ASSETID_MSG");
                }
            } else {
                this.logger.error(`assetId Missing=>`);
                throw ("ERR_ASSETID_MISSING_MSG");
            }
        } catch (error) {
            throw error;
        }

    }
}
