# email-api

Api to optimaze html for email 

---

## Config
Key for custom optimalization is config
For example
```js
config: {
    inlineCss: {
        ...
    },
    cleanUp: {
        ...
    },
    ...
}
```
---
### InlineCss
Settings for overriding default config for inlining css

##### Default
```js
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
```

### Cleanup
Seeings for removing unused styles and others attributes

##### Default
```js
cleanup: {
    removeUnusedCSS: {
        enabled: true,
        uglify: true,
    },
    preferBgColorAttribute: true,
},
```

### BaseImageUrl
Define a base URL that will be prepended to all image sources in your email

For example: 
```js
baseImageURL: 'https://cdn.example.com',
```

##### Default
```js
baseImageURL: '',
```
### applyExtraAttributes
Automatically add attributes to HTML elements in email template
Useful for:
- adding default attributes based on environment
- not having to write required attributes all the time
- automating email accessibility

For example add default width to all wrapper tables.
```js
applyExtraAttributes: {
  'table.wrapper': {
    width: 600
  }
},
```
##### Default
```js
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
```

### prettify
If required, prettify can be enabled to send html formatted
OCD: applies several formatting actions 
- condenses multiple newlines to a single newline
- trims leading and trailing whitespace
- ensures that a trailing newline is inserted
- normalizes whitepsace before code comments

##### Default
```js
prettify: {
    enabled: false,
    indent_inner_html: false,
    ocd: true,
},
```

---

Project is inspired by Maizzle
https://maizzle.com/
and turn into online api fo
Inspired by Maizzle and turn into online api
