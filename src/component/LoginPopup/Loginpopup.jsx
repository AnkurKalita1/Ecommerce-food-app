import React, { useState } from 'react'
import "./Loginpopup.css"
import { assets } from '../../assets/frontend_assets/assets'

const Loginpopup = ({setshowlogin}) => {

const [curstate , setcurstate] = useState("sign up")


  return (
    <div className='login-popup'>
      <form className='login-popup-container'>

     <div className="login-popup-title">
     <h2> { curstate}</h2>
     <img onClick={()=>setshowlogin(false)} src={assets.cross_icon} />
      </div>  
     
      
  <div className="login-popup-input">

    {curstate==="log in" ? <></> :  <input type="text" placeholder='your name' required/>}
    <input type="email" placeholder='email' required/>
    <input type="password" placeholder='password' required />
  </div>
   <button> {curstate==="sign up" ? "Create account" : "log in"} </button>
 <div className="login-popup-condition">
  <input type="checkbox" required />
  <p>By containing, i agree to the terms of use & privary policy. </p>
 </div>

   { curstate=== "log in" ?  <p> Create a new account ? <span onClick={()=>setcurstate("sign up")}> Click here </span></p> :
 <p> Already have a account <span onClick={()=> setcurstate("log in")}> Click here</span> </p>

}
 
</form>

    </div>
  )
}

export default Loginpopup
