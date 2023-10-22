import React from 'react';

// Internal
import { HEROIMG } from '../../assets';
import './hero.styles.css';
import Searchbox from '../shared/searchbox/searchbox.shared';

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
          <div className='trans-from-top'>
            <h1>Your piece of Paradise</h1>
            <h3>Land ownership made easy.</h3>
            <p>
                Say goodbye to paper contracts and hello to transparent
                and secure blockchain-based contracts.
            </p>
          </div>
            <Searchbox />
        </div>
        <img className='hero-img trans-from-right' src={HEROIMG} alt="" />
    </div>
  )
}

export default Hero