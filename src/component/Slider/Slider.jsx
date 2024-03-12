import React from 'react'
import './Slider.css'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';

const data =[
  {
    name:"BMW",
    image:"./Rectangle.png"
  },
  {
    name:"Bugatti",
    image:"./Rectangle2.png"
  },
   {
    name:"Audi",
    image:"./Rectangle3.png"
  },
   {
    name:"Bugatdti",
    image:"./Rectangle4.png"
  },
  {
    name:"Bugatdti",
    image:"./Rectangle4.png"
  },
  {
    name:"Bugatdti",
    image:"./Rectangle4.png"
  },
  
]
function Slider() {
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
    <>
    <h1 className='h-slider flexCenter'>Find by Car Type</h1>
    <div className='slider innerWidth flexCenter' >
      <Swiper {...sliderSettings}>
      <SliderButton/>

    {data.map((d,i)=>
      (
        <SwiperSlide key={i} >
       <div className='img-slider flexCenter '>
        <img src={d.image} width={200} height={160} />
        <p>{d.name}</p>
        </div> 
        </SwiperSlide>
      )
       )}

       </Swiper>
       <div className='background-slider'>

      {/* <img className='slider-r' src='./frame9.png' width={24}/>
      <img className='slider-l' src='./frame8.png' width={24}/> */}
     </div>
     </div>
    </>
  )
}

export default Slider
const SliderButton=()=>{
  const swiper =useSwiper()
  return(
    <>
     <img onClick={()=>swiper.slidePrev()} className='slider-r' src='./frame9.png' width={24}/>
      <img onClick={()=>swiper.slideNext()} className='slider-l' src='./frame8.png' width={24}/></>
     
  
  )
}
