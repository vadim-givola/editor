const path = require('path');

module.exports = {
    entry: './src/ts/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: [
                    /node_modules/,
                    /ts-test-project/,
                ]
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        library: 'editor',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
};
