import { Res } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TradeService } from '../src/trade/trade.service';
import { ApiService } from '../src/trade/api.service';


class ApiServiceMock {

  async getPrice(assetId: string): Promise<string> {

    const response = {
      data: {
        market_data: {
          current_price: {
            usd: "123"
          }
        }
      }
    };
    return response.data.market_data.current_price.usd;
  }
}

describe('TradeService', () => {
  let tradeService: TradeService;

  beforeAll(async () => {
    const ApiServiceProvider = {
      provide: ApiService,
      useClass: ApiServiceMock,
    };

    const app: TestingModule = await Test.createTestingModule({
      providers: [TradeService, ApiServiceProvider],
    }).compile();

    tradeService = app.get<TradeService>(TradeService);
  });

  describe('getAssetValue', () => {
    it('should return 123 as price', async () => {
      const coinName = "BTC";
      let assetVal = await tradeService.getAssetValue(coinName);
      expect(assetVal.value).toEqual("123.0");
    });
  });

  describe('getAssetValue', () => {
    it('should return ERR_NOTSUPPORTED_ASSETID_MSG', async () => {
      const coinName = "BTC1";
      try {
        let assetVal = await tradeService.getAssetValue(coinName);
      } catch (error) {
        expect(error).toEqual("ERR_NOTSUPPORTED_ASSETID_MSG");
      }


    });
  });

  describe('getAssetValue', () => {
    it('should return ERR_ASSETID_MISSING_MSG', async () => {
      const coinName = "";
      try {
        let assetVal = await tradeService.getAssetValue(coinName);
      } catch (error) {
        expect(error).toEqual("ERR_ASSETID_MISSING_MSG");
      }


    });
  });
});

