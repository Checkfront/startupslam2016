import React, { Component } from 'react'
import CategoryContainer from './CategoryContainer'

class MainContainer extends Component {
	constructor() {
		super()

		this.state = {

		}
	}

	render() {
		return (
			<div className="container-fluid">
				<div className="jumbotron">
					<h1>Sweet Tours!</h1>
					<p></p>
				</div>
				<CategoryContainer />	
			</div>
		)
	}
}

export default MainContainer