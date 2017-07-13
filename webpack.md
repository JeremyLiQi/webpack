# Webpack入门指南

## 一、什么是 webpack？

[webpack](http://webpack.github.io/)是一款模块加载器兼打包工具，它能把各种资源，例如JS（含JSX）、ES6、样式（含less/sass）、图片等都作为模块来使用和处理。

[更多webpack学习内容](https://github.com/lengziyu/learn-webpack)

## 二、安装

```basic
$ npm install webpack -g
```

## 三. 配置

创建 **webpack.config.js** 它的作用和gulpfile.js一样就是一个配置项，设置 webpack 任务功能。

* entry 入口文件 让webpack用哪个文件作为项目的入口
* output 出口 让webpack把处理完成的文件放在哪里
* module 模块 要用什么不同的模块来处理各种类型的文件
* plugins 插件 用来配置需要用到的插件
* resolve 用来设置路径指向
* watch 用监听文件有改动后执行打包

```javascript
module.exports = {
	entry:"",//入口文件
	output:{//出口
		path:"",
		filename:""
	},
	module:{//模块
		loaders:[
			{test:/\.js$/,loader:""}
		]
	},
	plugins:{},
	resolve:{},
	wacth:true	
}
```

## 四.开启服务器自动刷新

### 安装全局webpack-dev-server模块

```basic
//安装
$ npm install webpack-dev-server -g

//运行
$ webpack-dev-server --progress --colors

```
### 配置设置webpack.config.js

```javascript
devServer: {
    contentBase: "www/",
    inline:true,
    port : "3000"
}
```

## 五.例子demo
```javascript
1.建一个hello.js模块
2.多个入口文件
3.插件使用
	//用于提取多个入口文件的公共脚本部分
	var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
	//压缩代码
	var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
4.loader的使用，less样式打包 
	{
		test:/\.css$/,
		loader:"style-loader!css-loader!less-loader"
	}
5.图片打包
	{
		test:/\.(png|jpg)$/,
		loader:"url-loader?limit=1&name=images/[name].[ext]"
	}
6.resolve设置路径指向
	{	        
        root: '',//require查找module的话从这里开始查找 	        
        extensions: ['', '.js', '.css',".less"],//require模块可以省略不写后缀名	        
        alias: {//后续直接 require('style') 即可
            style : '../css/style.scss',
        }
    }
7. react jsx打包
	//npm install babel-loader babel-preset-es2015 babel-preset-react||jsx-loader
	{ 
		test: /\.js[x]?$/, 
		exclude: /node_modules/, 
		loader: 'babel?presets[]=es2015&presets[]=react' 
	}
8.webpack-dev-server 自动刷新
	devServer: {
	  inline: true,
	  port: 8088
	}
9.其他插件
	//生成CSS文件
	var E = require("extract-text-webpack-plugin");
	loader{
	    test: /\.css$/,
	    loader:  E.extract("style-loader","css-loader")
	}
	plugins: [
		new E("[name].css"),
    	new webpack.ProvidePlugin({
        	React: 'react',
        	ReactDOM: 'react-dom',
    	})//直接加载到全局不需要require()
		


    ]
10.gulp+webpack
	var gulp = require('gulp');
	var webpack = require('gulp-webpack');
	gulp.task('default', function() {
	  return gulp.src('./module/main.js')
	    .pipe(webpack(require('./webpack.config.js')))
	    .pipe(gulp.dest('js/'));
	});
```
