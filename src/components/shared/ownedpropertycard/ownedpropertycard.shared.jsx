import React from 'react'
import './ownedpropertycard.styles.css';

const OwnedpropertyCard = ({ 
  propertyName,  
  location,
  price,
  to,
  from,
  contractId
}) => {
  return (
    <div className='owned-property-card'>
      <div className="property-header">
        <div className='prop-header-title'>
          <h1>{propertyName}</h1>
          <p>{location}</p>
        </div>
        <div className="property-actions">
          <button>View Contract</button>
          <button>Property Documents</button>
          <button>Nominee</button>
          <button>Donate</button>
          <button>Transfer</button>
        </div>
        <div className='owned-market-price'>
          <h2>${price}</h2>
          <span>Market Price</span>
        </div>
      </div>
      <div className="property-footer">
        <div className="tx-id txn">
          <p>Transaction Id</p>
          <span>{contractId.slice(0, 8)}</span>
        </div>
        <div className="tx-process-info txn">
          <p>From</p>
          <span>{from.slice(0, 20)}</span>
          <p>→</p>
          <span>{to.slice(0, 20)}</span>
        </div>
        <button className='sell-button'>Sell</button>
      </div>
    </div>
  )
}

export default OwnedpropertyCard