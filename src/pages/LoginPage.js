import React from 'react'
import Profile from '../images/Profile.jpg'
import './login-page.css'

function loginpage ()  {
  return (
        <div className='main'>
        <div className='sub-main'>
          <div>
                <div className='imgs'>
                  <div className='container-image'>
                  <img src={Profile} alt="Profile" className='profile-pic' />
                  </div>
                </div>
                
                <div>
                  <h1 className='login-title'> Login </h1>
                </div>
  
                <div>
                  <div className='Content-box'>
                    <p className='Name-title'>Name</p>
                    <input type='text' placeholder='UserName' className='name' />
                    
                    <p className='Email-title'> Email</p>
                    <input type='text' placeholder='Email' className='Email' />
                    
                    <p className='password-title'>Password</p>
                    <input type='text' placeholder='Password' className='Password' />
                  </div>
                </div>
                
                <div>
                  <button className='Submit'><b> S u b m i t </b> </button>
                </div>
          </div>
  
        </div>
        
      </div>
    )
}

export default loginpage
