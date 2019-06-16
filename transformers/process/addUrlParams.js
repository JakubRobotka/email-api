const qs = require('query-string')
const cheerio = require('cheerio')
const isUrl = require('is-url-superb')

const helpers = {
    asyncForEach: async function (array, callback) {
        for (let index = 0; index < array.length; index++) {
            await callback(array[index], index, array)
        }
    },
    isEmptyObject: obj => Object.entries(obj).length === 0 && obj.constructor === Object
}


module.exports = async (html, config) => {

    if (config.urlParameters && !helpers.isEmptyObject(config.urlParameters)) {
        let $ = cheerio.load(html, { decodeEntities: false })

        $('a').each((i, el) => {
            let url = $(el).attr('href')
            let parsed = qs.parseUrl($(el).attr('href'))
            let pattern = new RegExp(/^(https?:\/\/)/gm)

            if (!isUrl(url) || !pattern.test(parsed.url))
                return

            let params = parsed.query

            Object.keys(config.urlParameters).forEach((item) => {
                params[item] = config.urlParameters[item]
            })

            params = qs.stringify(params)

            $(el).attr('href', `${parsed.url}?${params}`)
        })

        return $.html()
    }

    return html
}
