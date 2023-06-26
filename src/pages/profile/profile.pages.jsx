import React from 'react';
import { useParams } from 'react-router-dom';
import { OwnershipCard } from '../../components';
import './profile.styles.css';
const Profile = () => {
  const { profileid } = useParams();
  return (
    <div className='profile-page'>
      <div className="profile-page-bg"></div>
      <div className="profile-page-container">
        <div className="profile-header">
          <img className='profile-image' src={"https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} alt="" />
          <div className="profile-content-container">
            <div className="user-header-info">
              <h1>{profileid}</h1>
              <p>0xFcf51wa...........saGa</p>
              <button>Copy</button>
            </div>
            <div className='user-other-info'>
              <div className="age-info info">
                <h1>34</h1>
                <p>Age</p>
              </div>
              <div className="marital-info info">
                <h1>Married</h1>
                <p>Marital Status</p>
              </div>
              <div className="profession-info info">
                <h1>Attorney</h1>
                <p>Profession</p>
              </div>
            </div>
          </div>
        </div>

        {/* Properties Owned */}
        <div className="owned-properties">
          <OwnershipCard/>  
          <OwnershipCard/>  
          <OwnershipCard/>  
        </div>
      </div>        
      <div>
      </div>
    </div>
  )
}

export default Profile;