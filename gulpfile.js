var gulp = require("gulp");
var uglify = require("gulp-uglify");
var browserify = require("gulp-browserify");
var sass = require("gulp-sass");

gulp.task("build", function() {
  gulp.src("./src/bootstrap.js")
    .pipe(browserify({
      debug: true,
      transform: ["coffee-reactify"],
      extensions: [".coffee", ".cjsx", ".jsx"]
    }))
    .pipe(uglify())
    .pipe(gulp.dest("./build"));

  gulp.src("./src/style.scss")
    .pipe(sass())
    .pipe(gulp.dest("./build"))
});

gulp.task("default", ["build"], function() {
  gulp.watch("./src/**", function() {
    gulp.run("build");
  })
});
