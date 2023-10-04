const { search } = require("../../db/mongodb")

const searchPerson = (req, res) => {
    const url = new URL(req.url, "http://localhost:8080")
    const term = url.searchParams.get("t")

    if(term == "") {
        res.writeHead(400) // Bad Request
        res.end()
        return
    }

    search(term).then(people => {
        res.writeHead(200) // OK
        res.end(JSON.stringify(people))
    }).catch(err => {
        switch (err.name) {
            case 'MongoServerError':
                res.writeHead(500); // Internal Server Error
                break
            default:
                res.writeHead(404) // Not Found
        }
        res.end()
    })
}

module.exports = { searchPerson }