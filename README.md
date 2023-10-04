[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Node / Express server

After the benchmark for Go Servers (see [code here](https://github.com/marco-rosner/lightweight-go-server) and the [conclusions here](https://medium.com/p/caadd9a78319), this project is a benchmark comparing pure node server, express server and Fiber (go) server using MongoDB, the winners from Go Servers benchmark. We will use some of the rules from [Rinha de beckend](https://github.com/zanfranceschi/rinha-de-backend-2023-q3) to get the results.

## Project Setup

```sh
npm install
```

### Hot-Reload for Development

For Node:
```sh
npm run dev:node
```

For ExpressJS:
```sh
npm run dev:express
```

### Run server

For Node:
```sh
npm run start:node
```

For ExpressJS:
```sh
npm run start:express
```