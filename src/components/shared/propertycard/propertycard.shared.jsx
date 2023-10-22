import React from 'react'
import './propertycard.styles.css';

const Propertycard = ({ img, propTitle, propCity, owner, walletAddress, currentPrice, sellingPrice }) => {
  return (
    <div className='property-card'>
        <img className='prop-image' src={img} alt="" />
        <div className="prop-details-container">
            <div className="prop-title-sec">
                <h1>{propTitle}</h1>
                <p>{propCity}</p>
            </div>

            <div className='prop-owner'>
                <h2>{owner} 0x{walletAddress.slice(1, 3)}...</h2>
                <span>Owner</span>
            </div>
            <div className="pricing-section">
                <div className="mkt-price price">
                    <h2>${currentPrice}</h2>
                    <p>Market price</p>
                </div>
                <div className="selling-price price">
                    <h2>${sellingPrice}</h2>
                    <p>Selling price</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Propertycard;