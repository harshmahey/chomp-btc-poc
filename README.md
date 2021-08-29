## Description

[CHOMP-BTC-POC](https://github.com/harshmahey/chomp-btc-poc) is a sample application created as a NEST POC.
### [Reference Link followed.](https://nishabe.medium.com/nestjs-serverless-lambda-aws-in-shortest-steps-e914300faed5)
### [NestJS Documentation](https://docs.nestjs.com/)
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# Start offline
$ sls offline start
or 
$ npm run offline

# Deploy to server
$ sls deploy -v
or
$ npm run deploy

# watch logs for main
$ sls logs -f main

# Clean up generated files
$ npm run cleanup
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Harsh Mahey](https://linkedin.com/in/harshmahey)

## License

Nest is [MIT licensed](LICENSE).
