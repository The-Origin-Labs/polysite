import React from 'react';
import { useParams } from 'react-router-dom';
const Profile = () => {
  const { profileid } = useParams();
  return (
    <div className='profile-page'>
        {profileid}
    </div>
  )
}

export default Profile;