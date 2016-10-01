import React from 'react'

function Item({name, description, image}) {
	return (
		<div className='col-sm-6'>
			<div className='thumbnail'>
				<img className='img-responsive img-rounded' src={image} />
				<div className='caption'>
					<h3>{name}</h3>
					<p>{description}</p>
				</div>
			</div>
		</div>
	)
}

export default Item