import React from 'react'
import './navbar.css'
import logo from '../../assets/SiD.svg'

const Navbar = () => {
  return (
    <nav>
        <div className='pf__navbar'>
          <div className='pf__navbar-links'>
            <div className='pf__navbar-links_logo'>
              <img src = {logo} alt = 'SiD' className='logo'/>
            </div>

            <div className='pf__navbar-links_container'>
              <p><a href="#about">About</a></p>
              <p><a href="#projects">Projects</a></p>
              <p><a href="#skills">Skills</a></p>
              <p><a href="#contact">Contact</a></p>
            </div>
          </div>
        </div>
        
    </nav>
    
    
  )

}

export default Navbar
