import { createContext, useEffect, useState } from "react";
import { food_list } from "../../assets/frontend_assets/assets";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartitems, setcartitems] = useState({});
   
  
  const addtocart = (itemid)=>{
          if(!cartitems[itemid]){
            setcartitems((prev)=>({...prev,[itemid]:1}))
          }
         else{
            setcartitems((prev)=>({...prev,[itemid]:prev[itemid]+1}))
         }
    }
    const removefromcart=(itemid)=>{
        setcartitems((prev)=>({...prev,[itemid]:prev[itemid]-1}))
    }
   
    const getTotalAmount =()=>{
    let totalamount = 0;
     for(const item in cartitems){
      if(cartitems[item]>0){
        let iteminfo = food_list.find((product)=> product._id === item);
        totalamount += iteminfo.price * cartitems[item]; 
      }
    }


    return totalamount
    }





  const contextValue = {
    food_list,
    cartitems,
    setcartitems,
    addtocart,
    removefromcart,
    getTotalAmount
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
