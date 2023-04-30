import React from 'react';
import './searchbox.styles.css';

const Searchbox = () => {
  return (
    <div className='search-box'>
      <div className="listing-tabs">
        <div className="sell-tab tab">Sell</div>
        <div className="buy-tab tab">Buy</div>
      </div>
      <div className="search-fields">
        <div className="search-act location">
          <h3>Location</h3>
          <input className='prop-search' type="text" placeholder='Enter Location/Area' id="" />
        </div>
        <div className="search-act state">
          <h3>State</h3>
          <input className='prop-search' type="text" placeholder='Enter State' id="" />
        </div>
        <div className="search-act pincode">
          <h3>Pin Code</h3>
          <input className='prop-search' type="text" placeholder='Enter Pin-Code' id="" />
        </div>
        <button className="search-property">Search</button>
      </div>
    </div>
  )
}

export default Searchbox;