
import React, { useContext} from 'react'
import './FoodItem.css'
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../context/StoreContext'
const FoodItem = ({id , name , price,description,image}) => {

 
 const {cartitems,addtocart,removefromcart}= useContext(StoreContext)

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className=' food-item-image'src={image} />
        {
            !cartitems[id] ? <img className='add' onClick={()=> addtocart(id)} src={assets.add_icon_white} alt="" /> : 
            <div className='food-item-counter'>
            <img onClick={()=>removefromcart(id)} src={assets.remove_icon_red} alt="" />
           <p>   {cartitems[id]} </p> 
            <img onClick={()=>addtocart(id)} src={assets.add_icon_green} alt="" />
            </div>
        }
       
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">  
        <p>{name}</p>
        <img src={assets.rating_starts}  />
            </div> 
       
       <p className='food-item-des'>  {description}</p>
       <p className='food-item-price'>${price}</p>

      </div>

    </div>
  )
}

export default FoodItem
