const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    resolve: {
        plugins: [
            new CopyWebpackPlugin([{ from: 'tmp/a.txt', to: 'dist/' }]),
        ]
    }
};
