const { get } = require("../../db/mongodb")

const getPerson = (personId, res) => {
    get(personId).then(person => {
        if (person === null) {
            res.writeHead(404) // Not found
            res.end()
        } else {
            res.writeHead(200); // OK
            res.end(JSON.stringify(person));
        }
    }).catch(err => {
        console.log(err.name)
        res.writeHead(500); // internal server error
        res.end();
    })

}

module.exports = { getPerson }