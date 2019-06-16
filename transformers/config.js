module.exports = {
    inlineCSS: {
        enabled: true,
        styleToAttribute: {
            'background-color': 'bgcolor',
            'background-image': 'background',
            'text-align': 'align',
            'vertical-align': 'valign',
        },
        applySizeAttribute: {
            width: ['TABLE', 'TD', 'TH', 'IMG', 'VIDEO'],
            height: ['TABLE', 'TD', 'TH', 'IMG', 'VIDEO'],
        },
        excludedProperties: null,
    },
    cleanup: {
        removeUnusedCSS: {
            enabled: true,
            uglify: true,
        },
        preferBgColorAttribute: true,
    },

    baseImageURL: '',

    applyExtraAttributes: {
        table: {
            cellpadding: 0,
            cellspacing: 0,
            role: 'presentation',
        },
        img: {
            alt: ''
        }
    },

    prettify: {
        enabled: false,
        indent_inner_html: false,
        ocd: true,
    },

    minify: {
        minifyCSS: true,
        maxLineLength: 500,
        collapseWhitespace: true,
        processConditionalComments: true,
    },
}