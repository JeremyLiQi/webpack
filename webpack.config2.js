module.exports = {
	entry:"./app/app2.js",//入口
	// entry:{//多个入口文件
	// 	bundle:"./app/app.js",
	// 	bundle2:"./app/app2.js",
	// },
	output:{//输出
		path:__dirname+"/www",
		filename:"js/bundle.js"
	},	
	module:{//配置打包所需要用到的模块
		loaders:[
			{//处理样式模块
				test:/\.css$/,
				loader:"style-loader!css-loader!less-loader"				
				
			},
			{//处理图片模块
				test:/\.(png|jpe?g)$/,		
				loader:"url-loader?limit=1000&name=images/[name].[ext]"
			},
			{//处理jsx模块
		        test: /\.js[x]?$/, 
		        //不打包node_modules里面的模块
		        exclude: /node_modules/,
		        loader: 'babel-loader?presets[]=es2015&presets[]=react' 
		    }
		]
	},
}

// 第4
// sudo npm install style-loader css-loader less-loader less
// 第5
// sudo npm install file-loader url-loader
// 第7
// sudo npm install babel-loader babel-preset-es2015 babel-preset-react
 // sudo npm install babel-core
// 第9
// sudo npm install extract-text-webpack-plugin@^2.0.0-beta

// sudo npm install html-webpack-plugin clean-webpack-plugin


// 第10
// sudo npm install gulp-webpack





