const express = require('express')
const { newMongoDB } = require('../db/mongodb');

const { addPerson } = require('./person/handler_add');
const { getPerson } = require('./person/handler_get');
const { searchPerson } = require('./person/handle_search');
const { countPeople } = require('./person/handler_count');

const PORT = 8080

const bootstrap = () => {
    newMongoDB() // Creating Database

    const app = express();

    app.use(express.json()) // parsing application/json

    app.post('/pessoas', addPerson)
    app.get('/pessoas/:id', getPerson)
    app.get('/pessoas', searchPerson)
    app.get('/contagem-pessoas', countPeople)


    app.listen({ port: PORT }, () =>
        console.log(`🚀 Server ready at http://localhost:${PORT}`)
    );
}

bootstrap()