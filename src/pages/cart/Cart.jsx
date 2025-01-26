import React, { useContext } from "react";
import "./cart.css";
import { StoreContext } from "../../component/context/StoreContext";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { cartitems, food_list, removefromcart,getTotalAmount } = useContext(StoreContext);
  const navigate = useNavigate()

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p> Title</p>
          <p> Price</p>
          <p> Quantity</p>
          <p>Total</p>
          <p> Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartitems[item._id] > 0) {
            return (
              <>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p> {item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartitems[item._id]}</p>
                  <p>${cartitems[item._id] * item.price}</p>
                  <p className="cross" onClick={()=> removefromcart(item._id)}> X</p>
                </div>

                <hr />
              </>
            );
          }
        })}
      </div>

<div className="cart-bottom">
  <div className="cart-total">
    <h2>Cart Totals</h2>
    <div>
      <div className="cart-total-details">
        <p>Subtotal</p>
        <p> ${getTotalAmount()}</p>
      </div>
      <hr />

      <div className="cart-total-details">
        <p>Delivery Fee</p>
        <p>${getTotalAmount()===0? 0: 2}</p>
      </div>
      <hr />

      <div className="cart-total-details">
        <b>Total</b>
        <b>${getTotalAmount()===0?0:getTotalAmount()+2}</b>
      </div>

    </div>
    <button onClick={()=>navigate('/order')}>Proced to checkout</button>
  </div>
  <div className="cart-promocode">
    <div>
      <p>If you have a promo code, Enter it here</p>
      <div className="cart-promocode-input">
        <input type="text"  placeholder="promocode"/>
        <button  >Submit </button>
      </div>
    </div>
  </div>

</div>

    </div>
  );
};

export default Cart;
