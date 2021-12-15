const path = require('path');

module.exports = [{
    entry: path.resolve(__dirname, 'rule.js'),
    output: {
        filename: 'rule.js',
        path: path.resolve(__dirname, 'resources'),
        library: {
            name: ['nrlint','rules'],
            type: 'assign-properties'
        }
    },
    mode: 'development',
    devtool: false,
    target: ['webworker']
}]