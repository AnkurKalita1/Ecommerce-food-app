import React from 'react'
import { menu_list } from '../../assets/frontend_assets/assets'
import './ExploreMenu.css'
const ExploreMenu = ({category,setcategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishaes creafed with the finest ingredients and culinary expertise. </p>
      <div className='explore-menu-list'>
        {
            menu_list.map((item,index)=>{
            return <div className='explore-menu-list-item' key={index} onClick={()=>setcategory(prev=>prev===item.menu_name?'all':item.menu_name)}>
               <img className={category===item.menu_name?'active':""} src={item.menu_image} alt="" />
               <p> {item.menu_name}</p>
            </div>
            })
        } </div>
        <hr />
    </div>
  )
}

export default ExploreMenu
