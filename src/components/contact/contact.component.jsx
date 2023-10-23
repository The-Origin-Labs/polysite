import React from 'react';

// Internals
import './contact.styles.css';

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className="contact-header">
        <h1>Connect with Us.</h1>
      </div>
      <div className="contact-other-side">
        <p>
        If you have questions or need any general information, please complete this form to
        request the information you need. it will be an
        honor to heip you
        </p>
        <div className="connect-form">
          <div className="email-name form-div">
            <input className='contact-input' type="text" placeholder='Your Name' id="" />
            <input className='contact-input' type="email" placeholder='Your Email' id="" />
          </div>
          <div className="company-name form-div">
            <input className='contact-input company-name' type="text" placeholder='Company Name' id="" />
          </div>

          <div className="company-name form-div">
            <textarea className='contact-input message' type="text" placeholder='Your Message' id="" />
          </div>
          
          <div className="send-it-section form-div">
            <button className='send-it'>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;