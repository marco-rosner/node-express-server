const { default: mongoose } = require("mongoose");
const { create } = require("../../db/mongodb");

const addPerson = async (req, res) => {
    let body = [];
    req
        .on('data', chunk => body.push(chunk))
        .on('end', () => {
            body = Buffer.concat(body).toString();

            create(JSON.parse(body))
                .then(person => {
                    res.writeHead(201); // Created
                    res.end(JSON.stringify(person))
                })
                .catch(err => {
                    switch (err.name) {
                        case 'MongoServerError':
                            res.writeHead(500); // Internal Server Error
                            break
                        case 'ValidationError':
                            res.writeHead(400); // Bad Request
                            break
                        default:
                            res.writeHead(500); // Internal Server Error
                    }
                    res.end()
                })
        })
}

module.exports = { addPerson }