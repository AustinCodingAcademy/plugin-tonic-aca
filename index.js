var jsdom = require("jsdom").jsdom;
var window = jsdom().defaultView;

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
                var nodeVersion = '';
                var pre = window.document.createElement('pre');
                if (block.kwargs.nodeVersion) {
                  pre['data-node-version'] = block.kwargs.nodeVersion;
                }
                var className = 'pg-tonic';
                if (readOnly) className += ' readonly';

                pre.textContent = block.body;
                pre.className += className;
                return pre.outerHTML;
            }
        }
    }
};
