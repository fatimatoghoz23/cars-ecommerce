import React from 'react'
import './Footer.css'
const menu=['Home','Car Catalogue','Services']
const information=['Terms&Conditions','Privicy Policy']


function Footer() {
  return (
    <div>
      <div className="footer row flexCenter  ">
      <div className="menu1">
      <img src='./logo.png' width={130} className="image-h" />
      <h2>CAR COMPANY</h2>
      </div>
      <div className="menu1">
      <h4>Menu</h4>
      <div className="col ">
      {menu.map((m,i)=>(
      
          <a href='' key={i}>{m}</a>
        ))}
      </div>
      </div>
     <div className="menu1">
     <h4>Further information</h4>
     <div className="col">
      
        {information.map((i,m)=>(
        
            <a href='' key={m}>{i}</a>
        ))}
     </div>
     </div>
     <div className="menu1">
     <h4>Contact Us</h4>
     <div className="col">
    
      <a href=''>
      <img src='./location.png' width={20} />
        647P+4G5,Seif Al-Doleh<br/>, Aleppo, Syria
        </a>
        <a href=''><img src='./phone.png' width={20} />+96323456</a>
        <a href=''><img src='./mail.png' width={20} />tagred@gmail.com</a>
      
     </div>
     </div>
     <div className="menu1">
     <h4>Follow us</h4>
     <div className="col icon">
        <a><img src='./facebook.png' width={20}  className='icon' /></a>
        <a><img src='./x.png' width={25} className='icon'  /></a>
        <a><img src='./insta.png' width={25} className='icon'  /></a>
     </div>
     </div>
      </div>
    </div>
  )
}

export default Footer
