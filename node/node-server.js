const http = require('http');
const { newMongoDB } = require('../db/mongodb');
const { routes } = require('./routes');

const PORT = 8080

const bootstrap = () => {
    newMongoDB();
    
    const handlerRequests = (req, res) => {
        res.setHeader("Content-Type", "application/json");
        
        routes(req, res);
    }

    const server = http.createServer(handlerRequests)

    server.listen(PORT)
    console.log(`🚀 Server ready at http://localhost:${PORT}`)
}

bootstrap()