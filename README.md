[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# NodeJS / ExpressJS server

After the benchmark of Go Servers (see [code here](https://github.com/marco-rosner/lightweight-go-server) and the [conclusions here](https://medium.com/p/caadd9a78319)), this project is a server benckmark among pure NodeJS, ExpressJS and Fiber (golang) server using MongoDB, Fiber and MongoDB are the winners from Go Servers benchmark. We will use some of the rules from [Rinha de beckend](https://github.com/zanfranceschi/rinha-de-backend-2023-q3) to get the results.

## Project Setup

```sh
npm install
```

### Hot-Reload for Development

```sh
npm run dev:<node|express>
```

### Run server

```sh
npm run start:<node|express>
```

### Using Docker

Run `mongo:latest` image:

```sh
docker run -d -p 27017:27017 -p 28017:28017 -e AUTH=no mongo:latest
```

Build the node or express server image using the correspondent dockerfile then run the image:

```sh
docker build -t <node|express>-server -f <node|express>.dockerfile .
docker run --network="host" --rm -p 8080:8080 node-server
```

### Using Docker Compose

Make sure that you have [docker](https://docs.docker.com/get-docker/) and [docker compose](https://docs.docker.com/compose/install/) installed. Next, you should choose which server (node or express) you would like to run (e.g. `docker-compose-<server>-mongo.yml`) and run the command like this:

```sh
docker-compose -f docker-compose-<node|express>-mongo.yml up --remove-orphans
```

## Run benchmark

I am using Gatling to run the benchmark and to install it go to benchmark folder and run the `install-gatling` script. After that, move the `BenchmarkSimulation.scala` file to `deps/gatling/user-files/simulations` and the resources `pessoas-payloads.tsv` and `termos-busca.tsv` to `deps/gatling/user-files/recources`.

Go to the command line and run:

```sh
sh deps/gatling/bin/gatling.sh
```

## Last results

![ExpressJS](./benchmark/resources/express-mongo.png?raw=true "ExpressJS server")
ExpressJS  
![Fiber](./benchmark/resources/fiber-go-mongo.png?raw=true "Fiber server")
Fiber  
![NodeJS](./benchmark/resources/node-server-mongo.png?raw=true "NodeJS server")
NodeJS  