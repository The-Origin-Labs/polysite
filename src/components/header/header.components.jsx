import React from 'react';
import { LOGO } from '../../assets';
import { Link, useNavigate } from 'react-router-dom';
import './header.styles.css';

const Header = () => {
    const navigate = useNavigate();

    const HandleLogin = () => {
        return navigate("/auth")
    }

    const HandleLogoNav = () => {
        return navigate("/")
    }
    return (
        <div className='header'>
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
                    <li>
                        <button className='header-login' onClick={HandleLogin}>
                            Log In
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;