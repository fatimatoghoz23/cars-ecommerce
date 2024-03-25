import  { useContext, useEffect } from 'react'
import './Cart.css'
import { GoX } from "react-icons/go";
import { Cartcontext } from '../../Context';
import { useParams } from 'react-router-dom';
// import { useMyContext } from '../../Context';


function Cart() {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;
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
         <th>Qty</th>
         <th>Delete</th>
        </tr>          
        </thead>
        <tbody>
        {state.map((item, id) => (
            <tr key={id}>
            <td width="10%">
            <img className='img-cart' src={item.image}  width={120} />
            </td>
            <td width="30%" className='title'><h3>{item.name}</h3>
            <div className="code">
            <p>code:#73748</p>
            <p>Engine Capacity:6000cc</p>
            </div>
            </td>
            <td>{item.price * item.qty}$</td>
            <td>{item.color}</td>
           
            <td>
               {/* <button
                onClick={() => dispatch({ type: "INCREASE", payload: item })}>
                +
              </button> */}
              {item.qty}
              {/* <button
                onClick={() => dispatch({ type: "DECREASE", payload: item })}>
                -
              </button> */}
              </td>
            
            <td><GoX className='x' color='#000' onClick={() => dispatch({ type: "REMOVE", payload: item })} /></td>
           </tr>
        ))}
        </tbody>
        
      </table>
      
      
    </div>
    </>
  )
}

export default Cart
