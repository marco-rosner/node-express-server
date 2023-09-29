const searchPerson = (req, res) => {
    const url = new URL(req.url, "http://localhost:8080")

    res.end(url.searchParams.get("t"))
}

module.exports = { searchPerson }