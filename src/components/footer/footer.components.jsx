import React from 'react'
import { GITHUB, LOGO } from '../../assets';
import './footer.styles.css';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-container">
            <div className="footer-left">
                <img className='footer-logo' src={LOGO} alt="" />
                <h2 className='footer-logo-title'>Landate</h2>
            </div>
            <div className="footer-right">
                <a href="/">
                    <img className='git-logo' src={GITHUB} alt="" />
                </a>
            </div>
        </div>
        <div className="hr-line"></div>
        <div className="footer-container-2">
            <p>© Copyright 2023. Siddhant Prateek Mahanayak.</p>
            <p>All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer