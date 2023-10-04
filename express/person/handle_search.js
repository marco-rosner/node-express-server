const { search } = require("../../db/mongodb")

const searchPerson = (req, res) => {
    const term = req.query && req.query.t

    if(term == "" || term == undefined) {
        res.sendStatus(400) // Bad Request
        res.end()
        return
    }

    search(term).then(people => {
        res.status(200).json(people) // OK
        res.end()
    }).catch(err => {
        console.error(err.name)
        switch (err.name) {
            case 'MongoServerError':
                res.sendStatus(500); // Internal Server Error
                break
            default:
                res.sendStatus(404) // Not Found
        }
        res.end()
    })
}

module.exports = { searchPerson }