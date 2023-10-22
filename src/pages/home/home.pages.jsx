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
          <div className='service-header trans-from-right'>
            <h1>Services offered by <span>Landate</span></h1>
          </div>
          <div className="services-offered">
            {SERVICEDATA.map((data) => (
              <Servicecard title={data.service_title} description={data.description}/>
            ))}
          </div>
        </div>
      </div>

      <div className="waiting-list-section">
        <div className="wait-section">
          <div className="wait-content trans-from-top">
            <h1>🚀 Be the first to your hands on.</h1>
            <p>Be among the first to get your hands on our groundbreaking new product!</p>
            <div className="shaking-note">
              <p>Don't miss out on this opportunity to be among the first to experience the future. Join the waiting list today!</p>
            </div>
          </div>
          <input className='waitlist-email-input trans-from-left' type="email" placeholder='Enter your email and get Lucky.' />
        </div>
      </div>
    </div>
  )
}

export default Home