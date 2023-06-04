import React, { useState } from 'react';
import './searchbox.styles.css';

const Searchbox = () => {
  const [selectedTab, setSelectedTab] = useState("sell");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <div className='search-box'>
      <div className="listing-tabs">
        <div 
        className={`sell-tab tab ${selectedTab === 'sell' ? 'selected' : ''}`}
        onClick={() => handleTabClick('sell')}>Sell</div>
        <div className={`buy-tab tab ${selectedTab === 'buy' ? 'selected' : ''}`}
        onClick={() => handleTabClick('buy')}>Buy</div>
      </div>
      <div className="search-fields">
        <div className="search-act location">
          <h3>Location</h3>
          <input className='prop-search' type="text" placeholder='Enter Location/Area' />
        </div>
        <div className="search-act state">
          <h3>State</h3>
          <input className='prop-search' type="text" placeholder='Enter State' />
        </div>
        <div className="search-act pincode">
          <h3>Pin Code</h3>
          <input className='prop-search' type="text" placeholder='Enter Pin-Code' />
        </div>
        <button className="search-property">Search</button>
      </div>
    </div>
  )
}

export default Searchbox;