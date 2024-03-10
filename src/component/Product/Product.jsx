import React from 'react'
import Categories from '../Categories/Categories';
import './Product.css'
import { Link, useParams } from 'react-router-dom';
import {FaStar} from 'react-icons/fa'
import { useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

const data =[
  {
    name:"Audi",
    image:"./picture22.png",
    color:'Black',
    price:'$240.55'
  },
  {
    name:"Honda",
    image:"/picture2.png",
    color:'Black',
    price:'$240.55'
  },
   {
    name:"BMW",
    image:"/picture55.png",
    color:'Black',
    price:'$240.55'
  },
   {
    name:"Volvo",
    image:"/picture44.png",
    color:'Black',
    price:'$240.55'
  },
  {
    name:"Volvo",
    image:"/picture44.png",
    color:'Black',
    price:'$240.55'
  },

  
]
const img=['/Rectangle 46.png','/Rectangle 47.png','/Rectangle 48.png','/Rectangle 49.png','/Rectangle 49.png']
const color=['#6799D5','#000000','#ffffff']
function Product() {
  const [rating,setRating]=useState(null)
  const [hover,setHover]=useState(null)
  // const { productId } = useParams();
  // const product = Categories.find((product) => product.id === productId);
  // const { image, name } = product;
  const sliderSettings={
    slidesPerView:4,
    spaceBetween:0,
    breakpoints:{
      300:{
        slidesPerView:1
      },
      400:{
        slidesPerView:1
      },
      500:{
        slidesPerView:1
      },
      600:{
        slidesPerView:1
      },
      700:{
        slidesPerView:3
      },
      1100:{
        slidesPerView:4
      },
    }
  }
  return (
    <div>
    <div className="flexCenter m-container">
     <div className="product-left paddings">
      <div className="product-details paddings innerWidth">
        <h2>Honda-Civic Type R</h2>
        <p>6000 cc</p>
        <img className='x' src='./ss.png' width={500}/>
        <div className='slider flexCenter' >
        <Swiper {...sliderSettings}>
        {img.map((d,i)=>
        (
        <SwiperSlide key={i} >
        <div className='image-slider flexCenter '>
        <img src={d} width={100} height={90} />
        </div> 
        </SwiperSlide>
        )
       )}
       <SliderButton/>
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
                color={currentRating <=(hover || rating) ? '#976E72' : '#fff'} 
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
                <button key={i} style={{backgroundColor:color}} className='btn-style' ></button>
              ))}
            </div>
            <div className="price ">
            <img src='./min.png' width={20} height={20}/>
           <p>1</p>
            <img src='./plus.png' width={20} height={20}/>
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