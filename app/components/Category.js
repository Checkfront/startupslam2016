import React from 'react'

const imageStyles = {
	borderRadius: '6px'
}

function Category({name, description, image, items, onClickCategory}) {
	return (
		<div className='col-sm-6'>
			<div className='thumbnail'>
				<img style={imageStyles} src={image} />
				<div className='caption'>
					<h3>{name}</h3>
					<p>{description}</p>
					<button className='btn btn-primary' onClick={() => onClickCategory(items)}>View Tours</button>
				</div>
			</div>
		</div>
	)
}

export default Category