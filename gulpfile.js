var gulp = require('gulp');
var watch = require('gulp-watch');
var webpack = require('gulp-webpack');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('build', function () {
    return gulp.src('public/src/index.js')
        .pipe(webpack({
            module: {
                loaders: [
                    {
                        test: /.jsx?$/,
                        loader: 'babel-loader',
                        exclude: /node_modules/,
                        query: {
                            presets: ['es2015', 'react']
                        }
                    }
                ]
            },
            output: {
                filename: "bundle.js"
            }
        }))
        //.pipe(uglify())
        .pipe(gulp.dest('public/build'))
});