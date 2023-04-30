import React from 'react'
import './propertycard.styles.css';

const Propertycard = () => {
  return (
    <div className='property-card'>
        <img className='prop-image' src={"https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?cs=srgb&dl=pexels-binyamin-mellish-1396132.jpg&fm=jpg"} alt="" />
        <div className="prop-details-container">
            <div className="prop-title-sec">
                <h1>Sea View Heights</h1>
                <p>New York City</p>
            </div>

            <div className='prop-owner'>
                <h2>Chris 0xFf1... </h2>
                <span>Owner</span>
            </div>
            <div className="pricing-section">
                <div className="mkt-price price">
                    <h2>$450K</h2>
                    <p>Market price</p>
                </div>
                <div className="selling-price price">
                    <h2>$750K</h2>
                    <p>Selling price</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Propertycard;