Shared Shopping List Server
==========

This project is the server side for the Shared Shopping List app I'm developing.
It's base on Node.js and GraphQL, using graphql-yoga.

## Requirements

To run this project, you need the following:

- Node.js v10.x.x
- Yarn or NPM
- Docker

## Installation

```
$ git clone https://github.com/pgomesdev/shared-shopping-list-server.git
$ cd shared-shopping-list-server
$ yarn OR npm install
$ cd prisma
$ docker-machine start default
$ docker-compose up -d
```

## Setting up prisma

1. To have access to a database you need to generate a prisma server (following the steps above will give you one), after that, run `docker-machine env default` and get the `$Env:DOCKER_HOST`.

2. Run `docker ps` and get the port exposed by the container that runs the image `prismagraphql/prisma:1.26`.

3. If you don't prisma installed globally, run `npm i -g prisma` or `yarn global add prisma`.

4. Run `prisma deploy` (if you have problems on windows, use `prisma.cmd deploy` instead), select 'Use other server', use the IP from step 1 and port from step 2 in the endpoint config, select a name that you want to use (recommend 'shared-shopping-list') and then select the name of the stage (recommend 'dev')

5. Create a .env file and set PRISMA_ENDPOINT to the endpoint that was created in your prisma/prisma.yml file.

6. Uncomment the line with `endpoint: ${env:PRISMA_ENDPOINT}` and delete the line with your local endpoint.

And you're good to go!

## Usage

To start a server run `npm start` OR `yarn start`

Then go to http://localhost:4000/

## License

The contents of this repository are covered under the [MIT License](LICENSE).
