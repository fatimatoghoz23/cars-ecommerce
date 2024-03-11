import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import {BiMenuAltRight} from 'react-icons/bi'
import { useState } from 'react'
const Header = () => {
  const [menuOpened,setMenuOpened]=useState(false)
  // const getMenuStyles=(menuOpened)=>{
  //   if (document.documentElement.clientWidth <=800){
  //     return {right: !menuOpened && "-100%"}
  //   }
  // }
  return (
    <section className="header">
      <div className="h-container flexCenter innerWidth paddings">
        <img src='./logo.png' width={130} className="image-h" />
        <div className="menu flexCenter" >
          <ul className={menuOpened ? "open":""}>
          <a href="" className='active'>Home</a>
          <a href="">Catalogue</a>
          <a href="">Contact Us</a>
          <a href="">Help</a>
          </ul>
         
          
        </div>
        
        <div className='flexCenter'>
          <Link to={`/Cart`}> <img src='./my cart.png' width={30} className="img-h"/></Link>
        <button className='h-button'>
          <a href=''>Register</a>
        </button>
        </div>
        <div className="menu-icon" onClick={()=>{setMenuOpened(!menuOpened)}}  >
        <BiMenuAltRight size={30} />
      </div>
      </div>
     
    </section>
  )
}

export default Header
