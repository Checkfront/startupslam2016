# Hello World
[JS Fiddle](https://jsfiddle.net/reactjs/69z2wepo/)

## Initialize npm and install dependencies 
node modules takes react and react dom and puts it in the node_modules folder.
so when you do npm install --save it'll install dependancies locally
```
> npm init
> npm install --save react react-dom
npm install --save-dev html-webpack-plugin webpack webpack-dev-server babel-core babel-loader babel-preset-react
```
### react vs reactDOM
React is its own elegant solution that doesn't depend on react DOM and can be used to build user interfaces with something like [react native](https://facebook.github.io/react-native/).

## Create app folder, index.html, and index.js
Let's start off and make a folder called app and our main index.html and index.js files.
```
> mkdir app
> cd app
> touch index.html
> touch index.js
```
### index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
	<title>Startup slam 2016</title>
</head>
<body>
	<div id="app"></div>
</body>
</html>
```

## Make .babelrc
```
Everything that is put in this array, babel will apply the transformations on.
{
	'presets': [
		'react'
	]
}
```

## Make webpack.config.js
The purpose of webpack: It takes some or all of your code and outputs it into one file.  If you consider each of your components or functions as a module, webpack bundles all of your required modules together in one spot. 
```
> touch webpack.config.js
```
```
// Get the HtmlWebpackPlugin module that we installed earlier
var HtmlWebpackPlugin = require('html-webpack-plugin')
// Config options for webpack plugin
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html', // transfer this template to /dist
  filename: 'index.html',
  inject: 'body'
});

module.export = {
	entry: [ // main entry for webpack
		'./app/index.js'
	],
	output: { // the outpath for all of the bundles or components
		path: __dirname + './dist',
		filename: 'index_bundle.js'
	},
	module: { // load all .js files expect those in node_modules and apply transformations 
		loaders: [ // the babel-loader will take out jsx and transpile it into regular javascript 
			{test: /\.js$/, exclude: /node_modules/, loader:'babel-loader'}
		]
	},
	plugins: [HTMLWebpackPluginConfig]
}
```
Let's recap what just happened.. So first you tell it to grab the main js file `./app/index.js` .  Then run it through the module loader babel-loader which will transform our jsx into plain javascript.  It is then outputted to `./dist` under the name `index_bundle.js` inject our index.html file and then Webpack plugin is run.

## Let's see it work! 
### Open up packages.json
Add a production script that runs wepack -p which will do everything for you.
```
"scripts": {
    "production": "webpack -p"
},
```
```
> npm run production
```
You should see a /dist folder with an index.html file and index_bundle.js in it.

##Stick with me we're almost done!

## In index.js
```
var app = document.getElementById('app')
app.innderHtml = 'Hello!'
```
So we can see that working

## Replace index.js with 
```
var React = require('react')
var ReactDOM = require('react-dom')

// The render methoed returns what the UI of your component looks like
// It is written in jsx so that's where babel comes into play and converts it for us.
var HelloWorld = React.createClass({
	render: function() {
		return (
			<div>Hello world!</div>
		)
	}
});
// Grab the HelloWorld component and render it in the element returned by document.getElementById('app')
ReactDOM.render(<HelloWorld />, document.getElementById('app'));
```

Might feel a bit weird righting your html in side of your javascript 
I promise you after a while you'll really start to like it
But if you want you can write vanila js but i really like jsx so we're going to write that

### Add start command to package.json
```
"scripts": {
    "prod": "webpack -p",
    "start": "webpack-dev-server"
  },
```

Now you can run
```
> npm run start
```
which gives you a local development server that does everything we just set up on the fly. 
