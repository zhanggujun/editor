const gulp = require('gulp')
const concat = require('gulp-concat')
const cssnano = require('gulp-cssnano')
const autoprefixer = require('gulp-autoprefixer')
const rename = require('gulp-rename')
const del = require('del')
const mini = require('gulp-clean-css')
// const babel = require('gulp-babel')

// gulp.task('default', () =>
//   gulp.src('dist/editor.min.js')
//     .pipe(babel({
//       presets: ['@babel/preset-env'],
//       plugins: ['@babel/transform-runtime']
//     }))
//     .pipe(gulp.dest('dist'))
// )

gulp.task('concat',() => {
  const fileList = [
    'dist/reset.css',
    'dist/editor.css'
  ]
  const _autoprefixer = _ => {
    return autoprefixer({
      'overrideBrowserslist':[
        'last 20 versions'
      ]
    })
  }
  return gulp.src(fileList)
    .pipe(_autoprefixer())
    .pipe(concat('editor.css'))
    .pipe(mini())
    .pipe(cssnano({zindex:false}))
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('dist'))
})

gulp.task('del',async () => {
  const delList = [
    'dist/reset.css',
    'dist/editor.css'
  ]
  await del(delList)
})

gulp.task('default',gulp.series('concat','del',done => done()))
