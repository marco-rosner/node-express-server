const { addPerson } = require('./person/handler_add')
const { countPeople } = require('./person/handler_count')
const { getPerson } = require('./person/handler_get')
const { searchPerson } = require('./person/handler_search')

const routes = (req, res) => {
    const urlSplited = req.url.split(/[\/,?]/g)

    switch (urlSplited[1]) {
        case "pessoas":
            // GET /pessoas/[:id]
            if (urlSplited.length >= 3 && Number(urlSplited[2]) > 0) {
                getPerson(urlSplited[2], res)
                break
            }
            // POST /pesssoas
            if (req.method == "POST") {
                addPerson(req, res);
            } else {
                // GET /pessoas
                searchPerson(req, res);
            }
            break
        case "contagem-pessoas":
            // GET /contagem-pessoas
            countPeople(res)
            break
        default:
            res.writeHead(400, "Bad Request");
            res.end();
    }
}

module.exports = { routes }