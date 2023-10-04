const { get } = require("../../db/mongodb")

const getPerson = (req, res) => {
    get(req.params.id).then(person => {
        if (person === null) {
            res.sendStatus(404) // Not found
            res.end()
        } else {
            res.status(200).json(person); // OK
            res.end()
        }
    }).catch(err => {
        console.error(err.name)
        res.sendStatus(500); // Internal Server Error
        res.end();
    })

}

module.exports = { getPerson }