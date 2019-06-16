const { parse } = require('url');
const Transformers = require('./../transformers');
module.exports = async (req, res) => {
    const { query } = parse(req.url, true);

    const { html = '', config = {}, env = '' } = query;

    const email = await Transformers.process(html, config, env);

    res.end(JSON.stringify(email));
}