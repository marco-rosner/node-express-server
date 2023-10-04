const { count } = require("../../db/mongodb");

const countPeople = (res) => {
    count().then(count => {
        res.writeHead(200)
        res.end(JSON.stringify(count))
    }).catch(err => {
        console.log(err.name)
        res.writeHead(500); // internal server error
        res.end();
    })
}

module.exports = { countPeople }