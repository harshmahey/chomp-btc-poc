import { HttpModule } from '@nestjs/axios';
import { Res } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from 'src/app.module';
import { ApiService } from './api.service';
import { TradeController } from './trade.controller';
import { TradeService } from './trade.service';


describe('TradeController', () => {
    let tradeController: TradeController;

    beforeAll(async () => {


        const app: TestingModule = await Test.createTestingModule({
            imports: [AppModule, HttpModule],
            providers: [ApiService, TradeService],

        }).compile();

        tradeController = app.get<TradeController>(TradeController);
    });

    beforeEach(async () => {
        process.env.SUPPORTED_TOKENS = 'BTC, ETH';
        process.env.BTC = 'bitcoin';
        process.env.ETH = 'ethereum';
        process.env.ERR_ASSETID_MISSING_MSG = 'asset should be either BTC or ETH, not empty.';
        process.env.ERR_NOTSUPPORTED_ASSETID_MSG = 'This asset is not supported';
        process.env.PRICE_URL = 'https://api.coingecko.com/api/v3/coins';
    });




    describe('getCurrentAssetValue', () => {
        it('should return 123 as price', async () => {
            const coinName = "BTC";


            const response = await request(app.getHttpServer())
                .get('/student/gpa?firstName=Jane&lastName=Doe')
                .expect(200);
            expect(response.text).toEqual(expectedGpaString);

        });
    });


});

