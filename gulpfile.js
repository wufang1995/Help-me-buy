var gulp  =require("gulp");
var connect = require("gulp-connect");
var sass = require("gulp-sass");

var concat = require("gulp-concat"); //合并

var uglify = require("gulp-uglify"); // 压缩js

var rename = require("gulp-rename");

var minify = require("gulp-minify-css");
gulp.task("copyhtml",function(){
	return gulp.src("src/html/*").pipe(gulp.dest("dist/html")).pipe(connect.reload());
})

//gulp.task("copyjs",function(){
	//return gulp.src("src/js/*").pipe(concat("all.js")).pipe(gulp.dest("dist/js")).pipe(uglify()).pipe(rename("all.min.js")).pipe(gulp.dest("dist/js")).pipe(connect.reload());
//})
gulp.task("copyjs",function(){
    return gulp.src("src/js/*").pipe(gulp.dest("dist/js")).pipe(connect.reload());
})
gulp.task("copycss",function(){
	return gulp.src("src/css/**/*").pipe(sass()).pipe(concat("all.css")).pipe(gulp.dest("dist/css")).pipe(minify()).pipe(rename("all.min.css")).pipe(gulp.dest("dist/css")).pipe(connect.reload());
})
gulp.task("copyimg",function(){
    return gulp.src("src/images/**/*").pipe(gulp.dest("dist/images")).pipe(connect.reload());
})

gulp.task("mywatch",function(){
	gulp.watch("src/html/**/*",["copyhtml"]);
	gulp.watch("src/js/**/*",["copyjs"]);
    gulp.watch("src/css/**/*",["copycss"]);
    gulp.watch("src/images/**/*",["copyimg"]);
})

gulp.task("server",function(){
	connect.server({
		port:8000,
		root:["dist"],  //选择服务器根目录
		livereload:true //开启服务器通知更新功能
	})// websocket 即时通讯协议
})

gulp.task("init",["copyhtml","copycss","copyjs","copyimg"]);

gulp.task("default",["init","mywatch","server"]);
