import React from 'react'
import { Hero } from '../../components'
import './home.styles.css';
import Servicecard from '../../components/shared/servicecard/servicecard.shared';
import SERVICEDATA from '../../components/content/service.json';

const Home = () => {
  return (
    <div className='home-page'>
      <div className="hero-section"></div>
      <Hero /> 

      <div className="featured-section">
        <div>
          <div className='service-header'>
            <h1>Services offered by <span>Landate</span></h1>
          </div>
          <div className="services-offered">
            {SERVICEDATA.map((data) => (
              <Servicecard title={data.service_title} description={data.description} />
            ))}
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Home