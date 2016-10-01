import React, { Component } from 'react'
import CategoryContainer from './CategoryContainer'
import ItemContainer from './ItemContainer'

class MainContainer extends Component {
	constructor() {
		super()

		this.state = {
			items: [],
		}
	}

	handleClickCategory(items) {
		this.setState({
			items,
		})
	}

	render() {
		return (
			<div className="container">
				<div className="jumbotron">
					<h1>Sweet Tours!</h1>
					<p></p>
				</div>
				<CategoryContainer 
					handleClickCategory={(items) => this.handleClickCategory(items)}
				/>
				<ItemContainer 
					items={this.state.items}
				/>
			</div>
		)
	}
}

export default MainContainer