import React from 'react';

// Internal
import { GITHUB, INSTAGRAM, LINKEDIN, LOGO, TWITTER } from '../../assets';
import './footer.styles.css';

const Footer = () => {
	const date = new Date()
	return (
		<div className='footer'>
			<div className="footer-container">
				<div className="footer-left">
					<img className='footer-logo' src={LOGO} alt="" />
					<h2 className='footer-logo-title'>Landate</h2>

					<div className="">
						Work Policy - Work from Anywhere 🌐
					</div>
				</div>
				<div className='foot-right'>
					<p>Connect With Us.</p>
					<div className="footer-right">

						<a href="https://github.com/The-Origin-Labs/landate" target='__blank'>
							<img className='git-logo' src={GITHUB} alt="" />
						</a>
						<a href="https://www.linkedin.com/company/landate/" target='__blank'>
							<img className='git-logo' src={LINKEDIN} alt="" />
						</a>
						<a href="https://www.linkedin.com/company/landate/" target='__blank'>
							<img className='git-logo' src={INSTAGRAM} alt="" />
						</a>
						<a href="https://www.linkedin.com/company/landate/" target='__blank'>
							<img className='git-logo' src={TWITTER} alt="" />
						</a>
					</div>
					<p>📍 Anonymous, India</p>
				</div>
			</div>
			<div className="hr-line"></div>
			<div className="footer-container-2">
				<p>© 2022 — {date.getFullYear()} All Rights Reserved. Landate Inc.</p>
				<p>All rights reserved.</p>
			</div>
		</div>
	)
}

export default Footer