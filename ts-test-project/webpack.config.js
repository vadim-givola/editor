const path = require('path');

module.exports = {
    entry: './src/ts/test.ts',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'test.js'
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
        alias: {
            'editor': 'editor/dist/editor.min.js'
        },
    },
    devtool: '',
    devServer: {
        contentBase: './dist'
    }
};
