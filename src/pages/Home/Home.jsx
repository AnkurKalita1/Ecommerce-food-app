import React, { useState } from 'react'
import './Home.css'
import Header from '../../component/Header/Header'
import ExploreMenu from '../../component/exploreMenu/ExploreMenu'
import FoodDisplay from '../../component/FoodDisplay/FoodDisplay'
import Appdownload from '../../component/Appdownload/Appdownload'

const Home = () => {


  const [category, setcategory] = useState("all")
  return (
    <div>
      <Header/>
     <ExploreMenu category={category} setcategory={setcategory}/>
     <FoodDisplay category={category}/>
     <Appdownload/>
    
    </div>
  )
}

export default Home
