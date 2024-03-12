import React from 'react'
import './Categories.css'
import { Link, useParams } from 'react-router-dom';
import Product from '../Product/Product';
import { GoArrowRight } from "react-icons/go";
const data =[
  {
    name:"AUDI",
    image:"./picture22.png"
  },
  {
    name:"Honda",
    image:"./picture33.png"
  },
   {
    name:"VOLVO",
    image:"./picture44.png"
  },
   {
    name:"BMW",
    image:"./picture55.png"
  },
  
  
]
function Categories() {
  return (
    <div >
    <h1 className='h-categories flexCenter'>Top Categories</h1>
    <div className='categories flexCenter innerWidth'>
    {data.map((c,id)=>(
      <div key={id} className="box">
      
      <><img src={c.image} width={350} /><h2>{c.name}</h2>
      <div className="details-categories flexCenter">
      <img src='./seat.png' width={20} height={20} />
      <p>4 Seator</p>
      <img src='./wheel.png' width={20} height={20}/>
      <p>Manual</p>
      <img src='./svg.png' width={20} height={20}/>
      <p>5KM/1-lt</p>
      </div>
      <h1>Starting at $500/Day</h1>
      <div className="button-categories flexCenter">
        <button className='details'><Link to={`/Product`} >Details</Link><GoArrowRight/></button>
        <button className='buy'>Buy Now</button>

      </div>
      
      </>
     
      
      
      </div>
       ))}
      </div>
      
    </div>
  )
}

export default Categories
