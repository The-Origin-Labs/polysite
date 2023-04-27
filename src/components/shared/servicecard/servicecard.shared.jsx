import React from 'react'
import './servicecard.styles.css';

const Servicecard = ({ title, description}) => {
  return (
    <div className='service-card'>
        <h3 className="service-title">
            {title}
        </h3>
        <p>
            {description}
        </p>
    </div>
  )
}

export default Servicecard;