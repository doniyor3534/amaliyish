import React from 'react'
import img1 from "../img/gallery6.jpg";
import img2 from "../img/gallery2.jpg";
import img3 from "../img/gallery3.jpg";
import img4 from "../img/gallery4.jpg";
import img5 from "../img/gallery5.jpeg";
import img6 from "../img/gallery1.avif";
import img7 from "../img/gallery7.webp";

const About = () => {
  return (
    <div className='about'>
         <img className='img1' src={img1} alt="" />
         <img className='img2' src={img2} alt="" />
         <img className='img3' src={img3} alt="" />
         <img className='img4' src={img4} alt="" />
         <img className='img5' src={img5} alt="" />
         <img className='img6' src={img6} alt="" />
         <img className='img7' src={img7} alt="" />
    </div>
  )
}

export default About
