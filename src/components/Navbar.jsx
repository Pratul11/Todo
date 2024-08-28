import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  return (
    <>
    <nav>
            <div className="logo">
                <p>iTask</p>
            </div>
        <ul>
            <NavLink to="/"><li>HOME</li></NavLink>
            <NavLink to="/about"><li>ABOUT</li></NavLink>
            <NavLink to="/contact"><li>CONTACT US</li></NavLink>
        </ul>
      
    </nav>
    </>
  )
}

export default Navbar
