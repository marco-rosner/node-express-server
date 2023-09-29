const countPeople = (req, res) => {
    count = "countPeople"

    if (count === 0) {
        res.writeHead(404);
    }

    res.end(count)
}

module.exports = { countPeople }