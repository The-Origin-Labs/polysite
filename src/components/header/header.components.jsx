import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Internal
import { LOGO } from '../../assets';
import { AuthContext } from '../../context/auth.context';
import './header.styles.css';

const Header = () => {
	const { account, isAuthenticated } = useContext(AuthContext)

	const navigate = useNavigate();

	const HandleLogin = () => {
		return navigate("/auth")
	}

	const HandleLogoNav = () => {
		return navigate("/")
	}
	return (
		<div className='header trans-from-top'>
			<div className="header-left" onClick={() => HandleLogoNav()}>
				<img src={LOGO} alt="" />
				<h2 className='logo-title'>Landate</h2>
			</div>
			<div className="header-right">
				<ul>
					<li>
						<Link to="/about">
							About Us
						</Link>
					</li>
					<li>
						<Link to="/about">
							Connect
						</Link>
					</li>
					{isAuthenticated ? <>
						<li>
							<Link to="/claim">
								Claim
							</Link>
						</li>
						<li>
							<Link to="/listing/buy">
								Buy
							</Link>
						</li>
						<li>
							<Link to="/sell">
								Sell
							</Link>
						</li>
						<li>
							<Link to="/more">
								More
							</Link>
						</li>
					</> : <></>}
					<li>
						{
							!isAuthenticated ? (
								<button className='header-login' onClick={HandleLogin}>
									Log In
								</button>
							) : (
								<div className='userwallet-addr-cnt'>
									<p>{account.toString().slice(0, 5)}.......{account.toString().slice(account.toString().length - 2, account.toString().length)}</p>
								</div>
							)
						}
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Header;