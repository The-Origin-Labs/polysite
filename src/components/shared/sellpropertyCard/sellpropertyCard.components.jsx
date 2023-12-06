import React from 'react'

import './sellpropertyCard.styles.css';


const SellpropertyCard = ({ propertyName, place, price, propertyImg, description }) => {
  return (
    <div className='sell-propery-card'>
      <div className="sell-prop-container">
        <div className="sell-prop-view">
          <img className='sell-prop-img' src={propertyImg} alt="" />
        </div>
        <div className="sell-prop-details">
          <h1>{propertyName}</h1>
          <p className='sell-desp'>{description}</p>
          <p className='sell-place'>{place}</p>
          <h3>$ {price}</h3>
        </div>
      </div>
      <div className="sell-property-actions">
        <button className='sell-act-button'>Edit Property</button>
        <button className='sell-act-button'>Change Price</button>
        <button className='sell-act-button'>Change Image</button>
        <button className='sell-act-button button-red'>Cancel Selling</button>
      </div>
      
    </div>
  )
}

export default SellpropertyCard