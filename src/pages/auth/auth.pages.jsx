import React, { useContext } from 'react';

// Internal
import { LOGO } from '../../assets';
import { AuthContext } from '../../context/auth.context'
import './auth.styles.css';

const Auth = () => {
  const {
    isAuthenticated,
    // isWalletInstalled,
    account,
    walletLogin,
    walletLogout
  } = useContext(AuthContext)

  if (account === null) {
    return (
      <div className="auth-page">
        {
          !isAuthenticated ? (
            <div className="login-container trans-from-buttom">
              <div className="login-header">
                <img src={LOGO} alt="" />
                <h3>Landate</h3>
              </div>

              <div className="user-pw-login">
                <input type="text" className='simple-login-input' placeholder='Enter username or email.' />
                <input type="password" className='simple-login-input' placeholder='shhhh! Keep it secret.' />
                <div className="forgot-pw-action">
                  <a href="/login/forgot-password" className='forgot-password'>Forgot Password?</a>
                </div>
                <button className='simple-login-btn'>Log In</button>
              </div>
              <p style={{ textAlign: "center" }}>OR</p>
              <button className='wallet-login-btn' onClick={walletLogin}>Connect Wallet</button>
            </div>
          ) : (
            <p>Install Metamask wallet</p>
          )}
      </div>
    );
  }

  return (
    <div className="auth-page">
      <div className='login-container'>
        <p style={{ textAlign: "center" }}>Account: {account.toString().slice(0, 5)}.......{account.toString().slice(account.toString().length - 2, account.toString().length)}</p>
        <button className='wallet-login-btn' onClick={walletLogout}>Disconnect Wallet</button>
      </div>
    </div>
  );
}

export default Auth