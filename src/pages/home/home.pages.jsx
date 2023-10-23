import React from 'react';

// Internal
import { Featured, Hero, Contact } from '../../components'
import './home.styles.css';
import Servicecard from '../../components/shared/servicecard/servicecard.shared';
import SERVICEDATA from '../../components/content/service.json';
import Marquee from "react-fast-marquee";
import {
  KUBERNETES,
  NGINX,
  REACTIMG,
  GOLANG,
  REDIS,
  PYTHON,
  POSTGRES,
  MONGO,
  DOCKER,
  AWS, JS,
  GRAFANA,
  PROMETHEUS,
  CONSUL, TERRAFORM, MAP
} from '../../assets';

const TECHLIST = [
  { img: KUBERNETES },
  { img: NGINX },
  { img: REACTIMG },
  { img: GOLANG },
  { img: PYTHON },
  { img: REDIS },
  { img: POSTGRES },
  { img: MONGO },
  { img: DOCKER },
  { img: AWS },
  { img: JS },
  { img: GRAFANA },
  { img: PROMETHEUS },
  { img: CONSUL },
  { img: TERRAFORM },
]

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
              <Servicecard title={data.service_title} description={data.description} />
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

      <div className="tech-stacks-section">
        <div className='tech-content'>
          <div className="tech-content-container">
            <h1>Technology we harness</h1>
            <p>Taking advantage of technological advancements and solutions to find ways to make processes more efficient.</p>
          </div>
        </div>
      </div>
      <div className="marquee-flow">
        <Marquee>
          {TECHLIST.map(tech => (
            <img src={tech.img} className='tech-icon' alt="" />
          ))}
        </Marquee>
      </div>

      {/* Product Description */}
      <div className="intro-header">
        <h2>Introducing Landate.</h2>
      </div>
      <div className="intro-web">
          <Featured />
      </div>

      {/* Contact Us */}
      <div className="contact-section" 
        style={{ backgroundImage: `url(${MAP})`, 
        backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover'
      }}>
        <Contact />
      </div>
    </div>
  )
}

export default Home