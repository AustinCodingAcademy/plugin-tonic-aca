var jsdom = require("jsdom").jsdom;
var window = jsdom().defaultView;
var he = require('he');

module.exports = {
    book: {
        assets: './assets',
        js: [
            "https://embed.tonicdev.com",
            "plugin.js"
        ]
    },
    blocks: {
        tonic: {
            process: function(block) {
                var readOnly = Boolean(block.kwargs.readOnly);
                var pre = window.document.createElement('pre');
                if (block.kwargs.nodeVersion) {
                  pre['data-node-version'] = block.kwargs.nodeVersion;
                }
                var className = 'pg-tonic';
                if (readOnly) className += ' readonly';

                pre.textContent = he.decode(block.body).replace(/\\/g, '');
                pre.className += className;
                return pre.outerHTML;
            }
        }
    }
};
