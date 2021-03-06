// Karma configuration
// Generated on Tue Mar 01 2016 22:55:27 GMT+0700 (ICT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/angular/angular.min.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'src/**/*.js',
      'spec/**/*.js',
      'src/**/*.html'
    ],


    // list of files to exclude
    exclude: [
    ],


    preprocessors: {
        'src/**/*.html': ['ng-html2js']
    },
    
    ngHtml2JsPreprocessor: {
        cacheIdFromPath: function (filePath) {
            console.log("filePath " + filePath);
            var cacheId = filePath.replace("src/", "");
            console.log("cacheId " + cacheId);
            return cacheId;
        },
        moduleName: 'ngTemplates'
    },



    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
