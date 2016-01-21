var path = require('path');
var webpack = require('webpack');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');

module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    //singleRun: true,
    frameworks: ['mocha'],
    files: [
        'tests.webpack.js'
    ],
    preprocessors: {
        'tests.webpack.js': ['webpack']
    },
    reporters: ['dots'],
    webpack: {
        module: {
          loaders: [
            {
              test: /\.jsx?$/,
              loaders: ['babel?presets[]=es2015&presets[]=react'],
              //include: APP_PATH
            }
          ]
        },
        resolve: {
            extensions: ['', '.js', '.jsx']
        },
        watch: true
    },
    webpackServer: {
        noInfo: true
    }
  });

}
