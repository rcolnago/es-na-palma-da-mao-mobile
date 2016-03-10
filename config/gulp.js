module.exports = {
    paths: {
        build: {
            output: 'build'
        },
        sources: ['src/**/*.js'],
        configs: ['config/**/!(system).js', 'gulp-tasks/**/*.js', 'gulpfile.js'],
        stylesheets: ['src/**/*.scss', 'src/**/*.css'],
        scripts: [
            'src/**/*.js',
            'gulpfile.js'
        ],
        html: [
            'src/**/*.html',
            'index.html'
        ],
        static: [
            './src/**/*.json',
            './src/**/*.svg',
            './src/**/*.woff',
            './src/**/*.woff2',
            './src/**/*.ttf',
            './src/**/*.png',
            './src/**/*.gif',
            './src/**/*.ico',
            './src/**/*.jpg',
            './src/**/*.eot'
        ]
    },
    serverPort: 8088,
    serverPortTest: 8089,
    livereload: true,
    notifications: true
};
