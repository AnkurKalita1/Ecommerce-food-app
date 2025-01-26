import React, { useState } from "react";
import Navbar from "./component/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/cart/Cart";
import Placeorder from "./pages/placeorder/Placeorder";
import Footer from "./component/Footer/Footer";
import Loginpopup from "./component/LoginPopup/Loginpopup"


const App = () => {

const [ showlogin , setshowlogin ]=useState(false)

  return (
    <>
   { showlogin ? <Loginpopup setshowlogin={setshowlogin}/> :<> </> }
      <div className="app">
        <Navbar setshowlogin={setshowlogin}/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Placeorder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
