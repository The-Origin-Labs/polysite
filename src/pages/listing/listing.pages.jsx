import React from 'react'
import { PropertyCard } from '../../components';
import './listing.styles.css';
import Searchbox from '../../components/shared/searchbox/searchbox.shared';


const Listing = () => {
  return (
    <div className='listing-page'>
      <div>
        <div className="listing-search-header">
          <Searchbox />
        </div>
        <div className="listed-properties">
          {[...Array(10)].map((key) => (
            <PropertyCard />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Listing