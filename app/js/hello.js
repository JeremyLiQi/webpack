// function show(){
// 	alert("hello world2!")
// }
// // exports.show = show;
// module.exports = show;

// sudo npm install react react-dom
// var React = require("react");
// var ReactDOM = require("react-dom");
// var Hello = React.createClass({
// 	render:function(){
// 		return <h1>hello react!</h1>
// 	}
// })

// module.exports = Hello;

// import React,{Component} from 'react';
var {Component} = React;
export default class Hello extends Component{
	render(){
		return <h1>hello world!</h1>
	}
}

// export default Hello







