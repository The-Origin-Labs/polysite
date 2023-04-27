import React from 'react';
import { HEROIMG } from '../../assets';

import './hero.styles.css';
import Searchbox from '../shared/searchbox/searchbox.shared';

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h1>Your piece of Paradise</h1>
            <h3>Land ownership made easy.</h3>
            <p>
                Say goodbye to paper contracts and hello to transparent
                and secure blockchain-based contracts.
            </p>
            <Searchbox />
        </div>
        <img className='hero-img' src={HEROIMG} alt="" />
    </div>
  )
}

export default Hero