import React, { useEffect, useState } from 'react';
import { createServer } from "miragejs";

// Internal
import { PropertyCard } from '../../components';
import Searchbox from '../../components/shared/searchbox/searchbox.shared';
import Properties from '../../data/properties.json';

import './listing.styles.css';
import { SEARCHICON } from '../../assets';


let server = createServer()
server.get("/api/property", { properties: Properties })

const Listing = () => {
  const [ search, setSearch ] = useState("")
  const [ property, setProperties ] = useState([])

  useEffect(() => {
    fetch("/api/property")
      .then((res) => res.json())
      .then((json) => {
        console.log(json.properties)
        setProperties(json.properties)
      })
  }, [])

  const handleSearch = e => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  let Listed = property.filter(ppty => 
    ppty.location.toLowerCase().includes(search.toLowerCase())
  ) 

  return (
    <div className='listing-page'>
      <div className="listing-page-bg"></div>
      <div className="listing-container">
        <div>
          <div className="listing-search-header">
         
            {/* <Searchbox /> */}
            <div className="listed-search">
              <img className='src-icon' src={SEARCHICON} alt="" />
              <input className='search-location' 
                type="text" 
                onChange={handleSearch} 
                placeholder='Search Location / Area / City' />
            </div>
            <div className="search-results">
              <p>{Listed.length !== 0 ? <> 🙌 </> : <> 😔 </>}  {Listed.length} available results. </p>
            </div>
          </div>
          <div className="listed-properties">
            { Listed.length !== 0 ? <>{
                Listed.map((data) => (
                  <PropertyCard 
                    owner={data.owner} 
                    img={data.pictures[0]} 
                    propCity={data.location} 
                    propTitle={data.propertyName} 
                    currentPrice={data.currentPrice} 
                    sellingPrice={data.sellingPrice} 
                    walletAddress={data.walletAddress}
                  />
                ))
            }</> : <>
              <p>No Results Found...</p>
            </>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Listing