import React, { Component } from 'react'
import Category from '../components/Category'
import { getCategories } from '../utils/categoryHelper'

class CategoryContainer extends Component {
	constructor () {
		super();

		this.state = {
			categories: [],
		};
	}

	async componentDidMount() {
		const categories = await getCategories();
		console.log(categories)
		this.setState({
			categories,
		});
	}

	render () {
		const categories = this.state.categories.map((category, index) => {
			return <Category 
				key={index} 
				name={category.name}
				description={category.description}
				image={category.image}
			/>
		});

		return (
			<div className='row'>
				{categories}
			</div>
		)
	}
}

export default CategoryContainer