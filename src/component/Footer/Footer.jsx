import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
    
  return (
    <div className='footer' id='footer'> 
      <div className="footer-content">
        <div className="footer-content-left">

                 <img src={assets.logo} alt="" />
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsum at minus obcaecati repellendus, blanditiis porro deleniti sit repudiandae accusantium?</p>
             <div className="footer-social-icons" >
                <img src={assets.facebook_icon} alt=""/>
                <img src={assets.linkedin_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
             </div>


        </div>
        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Get In Touch</h2>
            <ul>
                <li>+91 9101519970</li>
                <li>ankurkalita451@gmail.com</li>
            </ul>
        </div>


      </div>
      <hr />
      <p className='footer-copyright'>
        Copyright 2024 @ tomato.com - all right reserved.
      </p>
    </div>
  )
}

export default Footer
