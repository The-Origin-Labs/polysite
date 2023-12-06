import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

// Internals
import { OwnedpropertyCard } from '../../components';
import './profile.styles.css';
import { createMockServer } from '../mirage/mockServer';
import { AuthContext } from '../../context/auth.context';


createMockServer()

const Profile = () => {
  const [info, setInfo] = useState()
  const [ownedProperty, setOwnedProperty] = useState([])
  
  const {
    walletLogout
  } = useContext(AuthContext)

  useEffect(() => {
    fetch("/api/info")
    .then((res) => res.json())
    .then((json) => setInfo(json.info[0]))
  }, [])

  useEffect(() => {
    fetch("/api/owned")
    .then((res) => res.json())
    .then((json) => setOwnedProperty(json.owned))
  }, [])
  ownedProperty?.map(ppty => console.log(ppty.propertyName))
  // console.log(ownedProperty.map(ppty => console.log(ppty)))
    // console.log(ownedProperty.forEach(ppty => console.log(ppty.propertyName)) )

  const { profileid } = useParams();
  return (
    <div className='profile-page'>
      <div className="profile-page-bg"></div>
      <div className="profile-page-container">
        <div className="profile-header">
          <img className='profile-image' src={info?.userImg} alt="" />
          <div className="profile-content-container">
            <div className="user-header-info">
              <h1>{info?.name}</h1>
              <p>{info?.walletAddress.slice(0, 8)}....{info?.walletAddress.slice(10, 15)}</p>
              <button>Copy</button>
            </div>
            <div className='user-other-info'>
              <div className="age-info info">
                <h1>{info?.age}</h1>
                <p>Age</p>
              </div>
              <div className="marital-info info">
                <h1>{info?.marital_status}</h1>
                <p>Marital Status</p>
              </div>
              <div className="profession-info info">
                <h1>{info?.profession}</h1>
                <p>Profession</p>
              </div>
            </div>
            <button className='wallet-login-btn' onClick={walletLogout}>Log out</button>
          </div>

        </div>

        {/* Properties Owned */}
        <div className="owned-prop-container">
          <div className="owned-properties">
            { ownedProperty?.map((ppty) => (
              <OwnedpropertyCard 
                key={ppty.propertyId}
                propertyName={ppty.propertyName}
                contractId={ppty.contractId}
                from={ppty.transaction.from}
                to={ppty.transaction.to}
                location={ppty.location.place}
                price={ppty.price}
              />    
            ))}
            {/* {ownedProperty} */}
                {/* <OwnershipCard/>   */}
          </div>
        </div>
      </div>        
      <div>
      </div>
    </div>
  )
}

export default Profile;