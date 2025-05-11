import React, { useContext } from 'react'
import "./Navbar.css"
import { useState } from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext'


function Navbar({setshowlogin}) {
  
const [menu, setMenu] =useState("home")
const{getTotalAmount}= useContext(StoreContext)

  return (
    <div>
      <div className="navbar">
        {/* <img src={assets.logo} alt="" */}
          <Link to="/"> 
          <h1 className='logo'>  Food Fusion </h1>
             </Link> 
        <ul className='navbar-menu'>
            <Link to='/' onClick={()=>{ setMenu("home")}} className={menu==="home"? "active":""} >Home</Link>
            <a href='#explore-menu' onClick={()=>{setMenu("Menu")}} className={menu==="Menu" ? "active":""}>Menu</a>
            <a href='#app-download' onClick={()=>{setMenu("Mobile-app")}} className={menu==="Mobile-app"?"active":""} > Mobile-app</a>
            <a href='#footer' onClick={()=>{setMenu("Contact Us")}} className={menu==="Contact Us" ? "active":""} >Contact Us</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                 <Link to= '/cart'>  <img  src={assets.basket_icon} alt="" /> </Link> 
                <div className={getTotalAmount()===0 ?"":"dot"}></div>
            </div>
            <button onClick={()=> setshowlogin(true)}>sign in</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar



