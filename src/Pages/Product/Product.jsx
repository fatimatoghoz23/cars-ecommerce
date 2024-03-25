import React, { useContext } from 'react'
import Categories from '../../component/Categories/Categories';
import './Product.css'
import { Link, useParams } from 'react-router-dom';
import {FaCheck, FaStar} from 'react-icons/fa'
import { useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/thumbs"
import {FreeMode,Navigation,Thumbs} from "swiper/modules"
import { Cartcontext } from '../../Context';
const data =
 [ {
  id:'1',
  name:"AUDI",
  image:"/picture22.png",
  color:['#6799D5','#000000','#ffeeff'],
  price:240.55,
  qty:1
  },
  {
    id:'2',
    name:"Honda",
    image:"/picture33.png",
    color:['#6799D5','#000000','#ffeeff'],
    price:120.55,
    qty:1
  },
   {
    id:'3',
    name:"VOLVO",
    image:"/picture44.png"
    , color:['#6799D5','#000000','#ffeeff'],
    price:210.55,
    qty:1
  },
   {
    id:'4',
    name:"BMW",
    image:"/picture55.png",
    color:['#6799D5','#000000','#ffeeff'],
    price:640.55,
    qty:1
  }]
  
const img=['/ss.png','/Rectangle 47.png','/Rectangle 48.png','/Rectangle 49.png']
// const color=['#6799D5','#000000','#ffeeff']
function Product() {
  const[swiper,setSwiper]=useState(null)
  const [rating,setRating]=useState(null)
  const [hover,setHover]=useState(null)
  const { productId } = useParams();
  const product = data.find((product) => product.id === productId);
  const { image, name,price ,qty,color } = product;
  const[colors,setColors]=useState(color[0])
  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  return (
    <div>
    <div className="flexCenter m-container">
     <div className="product-left paddings">
      <div className="product-details  innerWidth">
        <h2>{name}</h2>
        <p>6000 cc</p>
        <div className="flexCenter">
        <Swiper 
        thumbs={{swiper:swiper}}
        modules={[FreeMode,Navigation,Thumbs]}
        className='slider'
         >
        {img.map((d)=>
        (
        <SwiperSlide>
        <div className='image-slider flexCenter '>
        <img src={image} width={400} height={300} />
        </div> 
        </SwiperSlide>
        )
       )}
       <SliderButton/>
       </Swiper>
        </div>
        <div className=' flexCenter' >
        <Swiper navigation={true} 
        thumbs={{swiper:swiper}}
        modules={[FreeMode,Navigation,Thumbs]}
        slidesPerView={4}
        spaceBetween={3} 
         >
        {img.map((d)=>
        (
        <SwiperSlide  >
        <div className='image-slider flexCenter '>
        <img src={d} width={100} height={90} />
        </div> 
        </SwiperSlide>
        )
       )}
       </Swiper>
     </div>
     </div>
    </div>
          <div className="product-right ">
            <div className="details ">
            <h2 className='d'>Details</h2>
            <h2>Rating And Review</h2>
            <div className="stars">
               {[...Array(5)].map((star,index)=>{
              const currentRating= index+1
              return (
                <label>
                <input className='input-star'  value={currentRating} onClick={()=>setRating(currentRating)} />
                <FaStar className='star' 
                color={currentRating <=(hover || rating) ? '#976E72' : '#eee'} 
                size={30} 
                onMouseEnter={()=>setHover(currentRating)}
                onMouseLeave={()=>setHover(null)} />
                </label>
              )
            })
            }
            </div>
           
            <h2>Desciption</h2>
            <p>
            The culmimination of comfort,luxury,and powerrul living is embodied in the First-Ever BMWX7 -the biggest BMW ever built.
            </p>
            <h2>Colors</h2>
            <div className="color ">
              {color.map((c,i)=>(
                <button key={i} style={{backgroundColor:c}} 
                 className={ color===c? 'btn-style active':'btn-style' }
                 onClick={()=>setColors(c)}
                 >
                  {colors === c ?<FaCheck className='checkStyle'/> :null}
                </button>
              ))}
            </div>
            
            <div className="price ">
            <img  onClick={() => dispatch({ type: "INCREASE", payload: product })} src='./min.png' width={20} height={20}/>
           <p>{qty}</p>
            <img   onClick={() => dispatch({ type: "INCREASE", payload: product })} src='./plus.png' width={20} height={20} />
            <h2>Price:<span>{price}$</span></h2>
            </div>
            <div className="button-p">
            <button className='add'  onClick={() => dispatch({ type: "ADD", payload: product })}>Add To Cart</button>
            <button className='buy2'>Buy Now</button>
            </div>
            </div>
          
            {/* <div className="img-container">
              <img src='./Vector 1.png' />
            </div> */}
          </div>

        </div>
    </div>
  )
}

export default Product
const SliderButton=()=>{
  const swiper =useSwiper()
  return(
    <>
    <div className="but">
    <img onClick={()=>swiper.slidePrev()} className='slider-rr' src='./left.png' width={25}/>
    <img onClick={()=>swiper.slideNext()} className='slider-ll' src='./right.png' width={25}/>
     
    </div>
    </>
  
  )
}
