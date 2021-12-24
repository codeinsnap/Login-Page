import React from 'react'
import {Link} from "react-router-dom"
import './Navbar.css'

function Navbar() {
    return (
        <nav>
            <div className='header-container'>
                <div className='main-title'>
                    JAVA Script Project
                </div>

                <div className='info'>
                Click Here To Login
                </div>

                <div className='button-container'>
                    <Link
                    to='/LoginPage'>
                        <button className='button'>Login</button>
                    </Link>
                </div>
            </div>
        </nav> 
    )
}

export default Navbar;
