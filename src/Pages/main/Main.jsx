import React from 'react'
import './Main.css'
import { GoTriangleDown } from "react-icons/go";
import { RiExpandUpDownFill } from "react-icons/ri";
import Slider from '../../component/Slider/Slider';
import Categories from '../../component/Categories/Categories';
import Footer from '../../component/footer/Footer';
function Main() {
  return (

    <><div>
      <section className="main">
        <div className=" flexCenter  m-container">
          <div className="main-left">
            <div className="m-title">
              <h5>Arriving Summer 2019</h5>
              <h1>MAKE EVERY DAY<br />LEGENDARY</h1>
            </div>
            <div className="m-p flexCenter">
              The culmimination of comfort,luxury,and powerrul living is embodied<br />
              in the First-Ever BMWX7 -the biggest BMW ever built.
            </div>
            <button className='m-button flexCenter'>EXPLORE</button>

          </div>
          <div className="main-right ">
            <div className="image-container">
              <img src='./picture.png' />
            </div>
          </div>

        </div>
        <div className="search flexCenter innerWidth">
          <div className="s-input flexCenter">
            <div className='row'>
              <label>Name</label>
              <br />
              <img src='./icon car.png' className='icons-input' width={18} />
              <input placeholder='choose name' />
              <GoTriangleDown color='rgba(0, 0, 0, 0.5)' />
            </div>
            <div className='row'>
              <label>Price</label>
              <br />
              <img src='./vector.png' className='icons-input' width={18} />
              <input placeholder='choose price'></input><GoTriangleDown color='rgba(0, 0, 0, 0.5)' />
            </div>
            <div className='row'>
              <label>Engine Capicity</label>
              <br />
              <img src='./2vector.png' className='icons-input' width={18} />
              <input type="select" placeholder='choose capacity'></input><RiExpandUpDownFill color='rgba(0, 0, 0, 0.5)' />
            </div>
            <div className='row'>
              <label>Brand</label>
              <br />
              <img src='./3vector.png' className='icons-input' width={18} />

              <input placeholder='choose brand'></input><GoTriangleDown color='rgba(0, 0, 0, 0.5)' />
            </div>

          </div>
          <button className='s-button'>Search</button>
        </div>
      </section>
    </div>
    <Slider />
    <Categories/>
    <Footer/>
    
    </>

  )
}

export default Main
