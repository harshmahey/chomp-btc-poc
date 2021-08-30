import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {

  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/price (GET) BTC Works', async () => {
    const response = await request(app.getHttpServer())
      .get('/price?asset=BTC');
    expect(response.status).toEqual(200);
  });

  it('/price (GET) ETH Works', async () => {
    const response = await request(app.getHttpServer())
      .get('/price?asset=ETH');
    expect(response.status).toEqual(200);
  });

  it('/price (GET) Other asset fails', async () => {
    const response = await request(app.getHttpServer())
      .get('/price?asset=ETH1');
    expect(response.status).toEqual(500);
    let responseForErrorMsg = JSON.parse(response.text);
    expect(responseForErrorMsg.errorMsg).toEqual("This asset is not supported");
  });

  it('/price (GET) No asset fails', async () => {
    const response = await request(app.getHttpServer())
      .get('/price?asset=');
    expect(response.status).toEqual(500);
    let responseForErrorMsg = JSON.parse(response.text);
    expect(responseForErrorMsg.errorMsg).toEqual("asset should be either BTC or ETH, not empty.");
  });

});
