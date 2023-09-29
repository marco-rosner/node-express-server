const getPerson = (personId, res) => {
    res.end(`${personId}`)
}

module.exports = { getPerson }