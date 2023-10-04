const { count } = require("../../db/mongodb");

const countPeople = (_, res) => {
    count().then(count => {
        res.status(200).json(count)
        res.end()
    }).catch(err => {
        console.error(err.name)
        res.sendStatus(500); // Internal Server Error
        res.end();
    })
}

module.exports = { countPeople }