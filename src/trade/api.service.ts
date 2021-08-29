import { Logger, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';



@Injectable()
export class ApiService {
    private readonly logger = new Logger(ApiService.name);
    constructor(private http: HttpService) { }

    async getPrice(assetId: string): Promise<string> {
        let assetNameVal = eval(`process.env.${assetId}`);
        let url = `${process.env.PRICE_URL}/${assetNameVal}`;
        const response = await this.http.get(url).toPromise();
        this.logger.debug(`response is =>${response.data.market_data.current_price.usd}`)
        return response.data.market_data.current_price.usd;
    }
}

