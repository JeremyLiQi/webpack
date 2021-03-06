// var Commons = require("webpack/lib/optimize/CommonsChunkPlugin");
// //压缩代码
// var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
//生成CSS文件
var E = require("extract-text-webpack-plugin");
//生成HTML
var html = require("html-webpack-plugin")
//删除文件
var clean = require('clean-webpack-plugin');



var webpack = require("webpack");
module.exports = {
	// entry:"./app/app.js",//入口
	entry:{//多个入口文件
		bundle:"./app/app.js",
		bundle2:"./app/app2.js",
	},
	output:{//输出
		path:__dirname+"/www",
		filename:"js/[name].js"
	},
	plugins:[//插件
		new webpack.optimize.CommonsChunkPlugin({
			name:"common"
		}),
		new E({
			filename:"css/style.css",
			allChunks:true//合并所有样式文件
		}),
		new clean(["www"]),
		new html({
			title:"首页",
			template:__dirname+"/app/index.html",
			filename:"index.html",
			chunks:["common",'bundle']
		}),
		//设置全局变量
		new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom'
        })//直接加载到全局不需要require()
		// new webpack.optimize.UglifyJsPlugin()//压缩代码
	],
	module:{//配置打包所需要用到的模块
		loaders:[
			{//处理样式模块
				test:/\.css$/,
				// loader:"style-loader!css-loader!less-loader"				
				loader:E.extract({
					fallback:"style-loader",
					use:["css-loader","less-loader"]
				})
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
	// webpack-dev-server
	devServer: {
	  contentBase:"./www",
      inline: true,
      port: 8088
    },
	resolve:{           
        // root: __dirname+'/app/js',//require查找module的话从这里开始查找            
        modules:[
        	"node_modules",
        	__dirname+'/app/js',
        	__dirname+'/app/images',
        ],
        extensions: ['.js', '.css',".less"],//require模块可以省略不写后缀名            
        alias: {//后续直接 require('style') 即可
            style : './css/style.css',
        }
    }
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





