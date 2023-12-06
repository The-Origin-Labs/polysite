import React, { useEffect, useState } from 'react';


import './sell.styles.css';
import { SellPropertyCard } from '../../components';
import { SEARCHICON } from '../../assets';

const Sell = () => {
  const [search, setSearch] = useState("")
  const [properties, setProperty] = useState([])

  useEffect(() => {
    fetch("/api/sell")
      .then((res) => res.json())
      .then((json) => setProperty(json.sell))

  }, [])
  const handleSearch = e => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  let Listed = properties?.filter(ppty =>
    ppty.location.place.toLowerCase().includes(search.toLowerCase()) ||
    ppty.propertyName.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className='sell-page'>
      <div className="sell-page-header">
        <h1>SELL.</h1>
      </div>

      {/* Sell Search Bar */}
      <div className="sell-search-container">
        <div className="listing-search-header sell-bg">
          {/* <Searchbox /> */}
          <div className="listed-search">
            <img className='src-icon' src={SEARCHICON} alt="" />
            <input className='search-location'
              type="text"
              onChange={handleSearch}
              placeholder='Search by Location / Area / City / Name / WalletAdress' />
          </div>
          <div className="search-results">
            <p>{Listed.length !== 0 ? <> 🙌 </> : <> 😔 </>}  {Listed.length} available results. </p>
          </div>
        </div>
      </div>

      {/* Sell Property Listing */}
      <div className="sells-listing">
        {Listed.length !== 0 ? <>{
          Listed.map((data) => (
            <SellPropertyCard 
              key={data.propertyId}
              propertyImg={data.propertyImg}
              propertyName={data.propertyName}
              price={data.price}
              place={data.location.place}
              description={data.description}
            />
          ))
        }</> : <>
          <p>No Results Found...</p>
        </>
        }


      </div>
    </div>
  )
}

export default Sell