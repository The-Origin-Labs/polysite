import React from 'react';

// 
import './about.styles.css';
import { AVATAR } from '../../assets';

const About = () => {
  return (
    <div className='about-page'>
      <div className="about-header">
        <h1 className='trans-from-right'>ABOUT.</h1>
      </div>

      <div className="about-page-container">

        <div className="about-me-content">
          <div className="abt-left-content trans-from-left">
            <h1>Our Creator Thoughts</h1>
            <p className='creator-words'>Land is the foundation of economic security and survival for billions of people around the world, particularly in emerging countries like India. Secure property rights can mean the difference between a stable residence and a hazardous living situation for the urban poor. Real estate ownership has long been a delicate matter in India, where an estimated 65% of the country's land is held informally or illegally. This absence of substantial property rights severely impedes the urban poor's access to financial services, involvement in the formal economy, and participation in government schemes.</p>
            <p className='sign'>~ Siddhant Prateek Mahanayak</p>
          </div>
          <div className="abt-right-content trans-from-buttom">
            <img className='creator-img' src={AVATAR} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About