var gulp = require("gulp");
var webpack = require("gulp-webpack");

gulp.task("default",function(){
	gulp.src('')
		.pipe(webpack(require("./webpack.config2.js")))
		.pipe(gulp.dest("./dist"))
})