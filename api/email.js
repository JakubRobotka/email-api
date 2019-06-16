const { parse } = require('url');
const Transformers = require('./../transformers');
module.exports = async (req, res) => {
    const { query } = parse(req.url, true);

    let html = await Transformers.process(query.html = '', JSON.parse(query.config) = {}, query.env = 'prod');

    res.end(JSON.stringify(html));
}