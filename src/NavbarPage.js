import React from 'react'
import './Navbarpage.css'
import Background from './images/Background.jpg'
import Navbar from './Navbar'

function NavbarPage()  {
    return (
        <div >
        <Navbar />
          <div className='background-image'>
                    <img src={Background} className='image' alt='Loading Image' />
                </div>
                    
                        <h1 className='title'>Welcome to our </h1>
                        <h1 className='title2'>New Project </h1>
                    
        </div> 
            
    )
}

export default NavbarPage
