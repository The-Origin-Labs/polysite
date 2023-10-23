import React from 'react'

// Internals
import './featured.styles.css';
import { MOCK1, MOCK2 } from '../../assets';

const Featured = () => {
	return (
		<div className='featured-container'>
			<div className="ft-content trans-from-left">
				<h1>A new way to deal with land property.</h1>
				<p>
					Landate is an all-in-one tool that allows you to build your sell and buys assets inventory across all your
					platform in order to provide visibility into your costs and assist you in making informed decisions.
				</p>
			</div>
			<div className="image-ft trans-from-right">
				<img src={MOCK1} className='ft-image-1' alt="" />
				<img src={MOCK2} className='ft-image-2' alt="" />

			</div>
		</div>
	)
}

export default Featured