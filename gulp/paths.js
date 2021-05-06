module.exports = {
  app: {
    html: 'app/index.html',
    css: 'app/scss/main.scss',
    js: 'app/js/**/*.js',
    images: 'app/img/**/*',
    fonts: 'app/fonts/**/*',
  },
  watch: {
    html: 'app/**/*.html',
    css: 'app/scss/**/*.scss',
    js: 'app/js/**/*.js',
    images: 'app/img/**/*',
    fonts: 'app/fonts/**/*',
  },
  dist: {
    html: 'dist/',
    css: 'dist/css/',
    js: 'dist/js/',
    images: 'dist/img/',
    fonts: 'dist/fonts/',
  },
  inject: {
    html: 'dist/index.html',
    css: 'dist/css/**/*.css',
    js: 'dist/js/**/*.js',
  },
  clean: {
    clean: 'dist/',
  }
}
