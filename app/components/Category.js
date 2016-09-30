import React from 'react'

const imageStyles = {
	borderRadius: '6px'
}

function Category({name, description, image}) {
	return (
		<div className='col-sm-6'>
			<div className='thumbnail'>
				<img style={imageStyles} src={image} />
				<div className='caption'>
					<h3>{name}</h3>
					<p>{description}</p>
					<button className='btn btn-primary'>View Tours</button>
				</div>
			</div>
		</div>
	)
}

export default Category