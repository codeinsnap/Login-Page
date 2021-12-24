import React from 'react'
import {BrowserRouter as Router,Routes, Route,} from "react-router-dom"
import LoginPage from './pages/LoginPage'
import NavbarPage from './NavbarPage'
import Navbar from './Navbar'


function App() {
  return (
    <Router>
    {/* <Navbar /> */}
        <Routes>
          {/* <Route path='/' element={<Navbar/>}/> */}
          <Route path='/' element={<NavbarPage/> } />
          <Route path='/LoginPage' element={<LoginPage/>} />
        </Routes>
    </Router>
  )
}

export default App;
