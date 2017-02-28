var path = require('path');
var Webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var NODE_ENV = process.env.NODE_ENV;
var isProduction = (NODE_ENV === 'production');

// SCSS LOADERS SETTINGS
var scssLoaders = [
  'css-loader',
  'sass-loader'
];

var bundleName = 'app-bundle';

var config = {
    name: 'js',
    entry: [
        './app/index.js',
        './styles/entry.scss'
    ],
    output: {
        path: path.join(__dirname, './public/dist'),
        filename: !isProduction ? `${bundleName}.js` : `${bundleName}.min.js`
    },
    resolve: {
        extensions: ['', '.js', '.json', '.coffee']
    },
    module: {
        loaders: [ 
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-2']
                }
            },
            {
                test: /\.scss$/, 
                loader: ExtractTextPlugin.extract('style-loader', scssLoaders.join('!'))
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin(
            !isProduction ? `${bundleName}.css` : `${bundleName}.min.css`
        )
    ],
    devtool: isProduction ? '' : "source-map",
};

if (isProduction) {
    config.plugins.push(
        new Webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    );
}

module.exports = config;