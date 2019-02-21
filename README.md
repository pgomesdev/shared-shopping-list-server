Shared Shopping List Server
==========

![](https://img.shields.io/david/pgomesdev/shared-shopping-list-server.svg)
![](https://img.shields.io/github/license/pgomesdev/shared-shopping-list-server.svg)

This project is the server side for the Shared Shopping List app I'm developing.
It's base on Node.js and GraphQL, using graphql-yoga.

## Requirements

To run this project, you need the following:

- Node.js v10.x.x
- Yarn or NPM

## Installation

```
$ git clone https://github.com/pgomesdev/shared-shopping-list-server.git
$ cd shared-shopping-list-server
$ yarn OR npm install
```

## Setting up prisma

1. If you don't prisma installed globally, run `npm i -g prisma` or `yarn global add prisma`.

2. Run `prisma deploy` (if you have problems on windows, use `prisma.cmd deploy` instead), select the server you want to use (I recommend the demo server)

3. Create a .env file and set PRISMA_ENDPOINT to the endpoint that was created in your prisma/prisma.yml file.

4. Uncomment the line with `endpoint: ${env:PRISMA_ENDPOINT}` and delete the line with your local endpoint.

And you're good to go!

## Usage

To start a server run `npm start` OR `yarn start`

Then go to http://localhost:4000/

## License

The contents of this repository are covered under the [MIT License](LICENSE).
