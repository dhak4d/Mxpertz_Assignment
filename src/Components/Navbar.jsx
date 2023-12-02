import React from 'react'
import './Navbar.css'
import icon from 'D:/Mango Workspace/mxpertz/frontend/src/icon.png'

export const Navbar = () => {
  return (
    <>
     <div className='navbar'> 
        <div className='nav-head'>
           <h4>Restaurent Landing Page</h4>
        </div >
        <div className='inner-nav'>
          <ul>
            <li>Landing</li>
            <li>Home</li>
            <li>Gallery</li>
            <li>Shop</li>
            <li>About</li>
            <li>Team</li>
            <li>Contact</li>
          </ul>
          <div className='cart-div'><img src={icon} alt='loading' className='cart-png'/></div>
        </div>
        
     </div>
    </>
   
  )
}
