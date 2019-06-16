const inline = require('./process/inline');
const removeUnusedCss = require('./process/removeUnusedCss');
const removeInlineSizes = require('./process/removeInlineSizes');
const removeInlineBgColor = require('./process/removeInlineBgColor');
const applyExtraAttributes = require('./process/applyExtraAttributes');
const applyBaseImageUrl = require('./process/applyBaseImageUrl');
const addUrlParams = require('./process/addUrlParams');
const sixHex = require('./process/sixHex');
const pretty = require('./process/prettify');
const minify = require('./process/minify');

const defaultConfig = require('./config');
const deepmerge = require('deepmerge');

exports.process = async (html, config, env) => {

    console.log(config)

    config = await deepmerge(defaultConfig, config);
    html = await inline(html, config);
    html = await removeUnusedCss(html, config);
    html = await removeInlineSizes(html, config);
    html = await removeInlineBgColor(html, config);
    html = await applyExtraAttributes(html, config);
    html = await applyBaseImageUrl(html, config);
    html = await addUrlParams(html, config);
    html = await sixHex(html, env);
    html = await pretty(html, config);
    html = await minify(html, config);

    return html;
}