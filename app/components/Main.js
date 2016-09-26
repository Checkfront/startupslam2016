import React, { Component } from 'react'


class Main extends Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div>
				{React.cloneElement(this.props.children, {key: this.props.location.pathname})}
			</div>
		)
	}
}

Main.contextTypes = {
	router: React.PropTypes.object.isRequired
}

export default Main