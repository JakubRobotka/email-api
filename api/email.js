const { parse } = require('url');
const Transformers = require('./../transformers');
module.exports = async (req, res) => {
    const { query } = parse(req.url, true);

    let html = await Transformers.process(query.html, query.config = {});

    res.end(JSON.stringify(html));
}