import React from 'react'
import './Cart.css'
import { GoX } from "react-icons/go";

const data =[
  {
    name:"Audi",
    image:"./picture22.png",
    color:'Black',
    price:'$240.55'
  },
  {
    name:"Honda",
    image:"./picture2.png",
    color:'Black',
    price:'$240.55'
  },
   {
    name:"BMW",
    image:"./picture55.png",
    color:'Black',
    price:'$240.55'
  },
   {
    name:"Volvo",
    image:"./picture44.png",
    color:'Black',
    price:'$240.55'
  },

  
]
function Cart() {
  return (
    <>
    <img src='./Vector 2.png'className="image-cart" />

    <div className="myCart innerWidth paddings">
      <h1>My Cart</h1>
      </div>
    <div className='cart innerWidth paddings'>
      <table>
        <thead>
        <tr>
         <th></th>
         <th>Product</th>
         <th>Price</th>
         <th>Color</th>
         <th>Delete</th>
        </tr>          
        </thead>
        <tbody>
        {data.map((item, idx) => (
            <tr key={idx}>
            <td width="10%">
            <img className='img-cart' src={item.image}  width={120} />
            </td>
            <td width="30%" className='title'><h3>{item.name}</h3>
            <div className="code">
            <p>code:#73748</p>
            <p>Engine Capacity:6000cc</p>
            </div>
            </td>
            <td>{item.price}</td>
            <td>{item.color}</td>
            <td><GoX color='#000' /></td>

           </tr>
        ))}
        </tbody>
      </table>
      
      
    </div>
    </>
  )
}

export default Cart
