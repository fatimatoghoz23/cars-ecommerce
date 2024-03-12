import React from 'react'
import Categories from '../Categories/Categories';
import './Product.css'
import { Link, useParams } from 'react-router-dom';
import {FaStar} from 'react-icons/fa'
import { useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/thumbs"
import {FreeMode,Navigation,Thumbs} from "swiper/modules"
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
  {
    name:"Volvo",
    image:"./picture44.png",
    color:'Black',
    price:'$240.55'
  },

  
]
const img=['./ss.png','./Rectangle 47.png','./Rectangle 48.png','./Rectangle 49.png']
const color=['#6799D5','#000000','#ffeeff']
function Product() {
  const[swiper,setSwiper]=useState(null)
  const[number,setNumber]=useState(1)
  const [rating,setRating]=useState(null)
  const [hover,setHover]=useState(null)
  // const { productId } = useParams();
  // const product = Categories.find((product) => product.id === productId);
  // const { image, name } = product;
  
  return (
    <div>
    <div className="flexCenter m-container">
     <div className="product-left paddings">
      <div className="product-details  innerWidth">
        <h2>Honda-Civic Type R</h2>
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
        <img src={d} width={400} height={300} />
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
              {color.map((color,i)=>(
                <button key={i} style={{backgroundColor:color}}  className='btn-style' ></button>
              ))}
            </div>
            <div className="price ">
            <img onClick={()=>number>1?setNumber(number-1):setNumber(1)} src='./min.png' width={20} height={20}/>
           <p>{number}</p>
            <img onClick={()=>setNumber(number+1)} src='./plus.png' width={20} height={20} />
            <h2>Price:<span>250$</span></h2>
            </div>
            <div className="button-p">
            <button className='add'>Add To Cart</button>
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
