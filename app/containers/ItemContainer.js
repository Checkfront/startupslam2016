import React, {Component} from 'react'
import Item from '../components/Item'

class ItemContainer extends Component {
	constructor () {
		super()
	}

	render () {
		const items = this.props.items.map((item, index) => {
			return <Item
				key={index}
				name={item.name}
				description={item.description}
				image={item.image}
			/>
		});

		return (
			<div className='row'>
				<h3>Items</h3>
				{items}
			</div>
		)
	}
}

export default ItemContainer