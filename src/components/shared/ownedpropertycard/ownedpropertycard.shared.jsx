import React from 'react'
import './ownedpropertycard.styles.css';

const OwnedpropertyCard = () => {
  return (
    <div className='owned-property-card'>
      <div className="property-header">
        <div className='prop-header-title'>
          <h1>Sea View Heights</h1>
          <p>New York City</p>
        </div>
        <div className="property-actions">
          <button>View Contract</button>
          <button>Property Documents</button>
          <button>Nominee</button>
          <button>Donate</button>
          <button>Transfer</button>
        </div>
        <div className='owned-market-price'>
          <h2>$150K</h2>
          <span>Market Price</span>
        </div>
      </div>
      <div className="property-footer">
        <div className="tx-id">
          <p>Transaction Id</p>
          <span>0xFcf51wa...........saGa</span>
        </div>
        <div className="tx-process-info">
          <p>From</p>
          <span>0xFcf51wa...........saGa</span>
          <p>→</p>
          <span>0xFcf51wa...........saGa</span>
        </div>
        <button className='sell-button'>Sell</button>
      </div>
    </div>
  )
}

export default OwnedpropertyCard