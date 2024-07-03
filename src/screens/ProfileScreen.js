import React from 'react'
import "./ProfileScreen.css"
import Nav from '../Nav'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
const ProfileScreen = () => {
     const user=useSelector(selectUser);
  return (
    <div className='profilescreen'>
        <Nav/>
        <div className="profilescreenbody">
            <h1>Edit Profile</h1>
            <div className="profilescreeninfo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
                <div className="profilescreendetails">
                    <h2>{user.email}</h2>
                    <div className="profilescreenplans">
                        <h3>Plans</h3>
                    </div>
                    <button onClick={()=>auth.signOut()} className='signout'>Sign Out</button>
                </div>
                
            </div>
            

        </div>
    </div>
  )
}

export default ProfileScreen