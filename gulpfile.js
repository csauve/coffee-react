var gulp = require("gulp");
var uglify = require("gulp-uglify");
var browserify = require("gulp-browserify");
var sass = require("gulp-sass");
var install = require("gulp-install");
var serve = require("gulp-serve");

gulp.task("install", function(done) {
  gulp.src(["./src/package.json"])
    .pipe(install());
});

gulp.task("serve", ["build"], serve({
  root: ["."],
  port: "9001"
}));

gulp.task("styles", function() {
  gulp.src("./src/style.scss")
    .pipe(sass())
    .pipe(gulp.dest("./build"));
});

gulp.task("scripts", function() {
  gulp.src("./src/bootstrap.js")
    .pipe(browserify({
      debug: true,
      transform: ["coffee-reactify"],
      extensions: [".coffee", ".cjsx", ".jsx"]
    }))
    .pipe(uglify())
    .pipe(gulp.dest("./build"));
});

gulp.task("build", ["scripts", "styles"], function() {});

gulp.task("default", ["serve"], function() {
  gulp.watch("./src/**", function() {
    gulp.run("build");
  });
});
