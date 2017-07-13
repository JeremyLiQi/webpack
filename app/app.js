require("style")
// var hello = require("hello");
// hello();

var img1 = new Image();
img1.src = require("3d2.jpg");

var img2 = new Image();
img2.src = require("home.png");

document.body.appendChild(img1);
document.body.appendChild(img2);

// var React = require("react");
// var ReactDOM = require("react-dom");
// var Hello = require('hello');

// ReactDOM.render(<Hello/>,document.getElementById('app'))


// import React from 'react';
// import ReactDOM from 'react-dom';
import Hello from 'hello';

ReactDOM.render(<Hello/>,document.getElementById('app'))






