import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import routes from './config/routes'

class App extends Component{
	constructor(){
		super()
		this.state = {}
	}

	render(){
		return (
			<div>
				{routes}
			</div>
		)
	}
}
ReactDOM.render( <App />, document.getElementById('app'));