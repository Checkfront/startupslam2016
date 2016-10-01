import React, { Component, PropTypes } from 'react'
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
				items={category.items}
				onClickCategory={this.props.handleClickCategory}
			/>
		});

		return (
			<div className='row'>
				<h3>Categories</h3>
				{categories}
			</div>
		)
	}
}

CategoryContainer.propTypes = {
	handleClickCategory: PropTypes.func.isRequired,
}

export default CategoryContainer