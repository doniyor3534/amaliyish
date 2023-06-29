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
         <div className="img1 img"><img src={img1} alt="" /></div>
         <div className="img2 img"><img src={img2} alt="" /></div>
         <div className="img2 img"><img src={img2} alt="" /></div>
         <div className="img3 img"><img src={img3} alt="" /></div>
         <div className="img4 img"><img src={img4} alt="" /></div>
         <div className="img4 img"><img src={img4} alt="" /></div>
         <div className="img5 img"><img src={img5} alt="" /></div>
         <div className="img6 img"><img src={img6} alt="" /></div>
         <div className="img6 img"><img src={img6} alt="" /></div>
         <div className="img6 img"><img src={img6} alt="" /></div>
         <div className="img6 img"><img src={img6} alt="" /></div>
         <div className="img7 img"><img src={img7} alt="" /></div>
    </div>
  )
}

export default About
