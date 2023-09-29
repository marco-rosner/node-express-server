const addPerson = (req, res) => {
    count = "10"

    if (count === 0) {
        res.writeHead(404);
    }

    res.end(count)
}

module.exports = { addPerson }