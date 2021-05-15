const { series, src, dest, watch } = require ('gulp');
const sass       = require ('gulp-sass');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');

const paths = {
    imagenes: 'src/images/**/*',
    scss: 'src/scss/**/*',
    js: 'src/js/**/*'
}

//Función que compila SASS
function css(){
    return src(paths.scss)
    .pipe ( sass({
        outputStyle: 'expanded' 
    }) )
    .pipe ( dest('./build/css') )
}

//Función que compila Javascript
function javascript() {
    return src(paths.js)
        .pipe(concat('bundle.js'))
        .pipe(dest('./build/js'))
}

//// Minifica el peso de las imagenes
function imagenes () {
    return src(paths.imagenes)
        .pipe(imagemin())
        .pipe(dest('./build/img'))
}

/// Convierte a webp las imagenes
function wepe () {
    return src(paths.imagenes)
        .pipe(webp())
        .pipe(dest('./build/img'))
}

//Función que está alerta cuando hay cambios en un archivo
function watchArchives(){
    watch(paths.scss, css);
    watch(paths.js, javascript);
}


exports.css = css;
exports.watchArchives = watchArchives;

exports.default = series(css, javascript, watchArchives);