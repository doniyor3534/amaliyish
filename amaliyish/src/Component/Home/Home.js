import React, { useEffect } from 'react';
import img1 from '../../img/img1.png';
import img2 from '../../img/img2.webp';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Home = () => {
  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.imgglavni',{
        y:300,
        x:100,
        duration:8,
        scrollTrigger:{
          trigger:'.imgglavni',
          start:true,
          scrub:4,
        }
    })
    gsap.to('.imghisob',{
        x:-100,
        duration:8,
        scrollTrigger:{
          trigger:'.imghisob',
          start:true,
          scrub:4,
        }
    })
  },[])

  return (
    <div className='home'>
        <secton className="section1">
              <div className="textbox">
                  <h1>Best travel end destination</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nemo impedit fugit aliquam minima doloribus laudantium tenetur? Dolorum, doloremque repellat!</p>
                  <div className="btns">
                      <button>Our Destination</button>
                      <button>Our Gallery</button>
                  </div>
              </div>
              <img className='imgglavni' src={img1} alt="serfe" />
        </secton>
        <section className="section2">
             <div className="hisob">
                        <h1>Travel airlance</h1>
                  <div className="hisobheader">
                      <form action="">
                      <select >
                           <option  defaultValue>Qayerdan ?</option>
                           <option value="namangan" placeholder='Namangan' >Namangan</option>
                           <option value="Andijon" placeholder='Andijon' >Andijon</option>
                           <option value="Toshkent" placeholder='Toshkent' >Toshkent</option>
                       </select>
                       <select >
                           <option value="" defaultValue>Qayerdan ?</option>
                           <option value="namangan" placeholder='Namangan' >Namangan</option>
                           <option value="Andijon" placeholder='Andijon' >Andijon</option>
                           <option value="Toshkent" placeholder='Toshkent' >Toshkent</option>
                       </select>
                       <input type="number" placeholder='joy soni' />
                       <input type="number" placeholder='yosh bolalar soni' />
                       <button>Send</button>
                      </form>
                      <img src={img2} alt="" className="imghisob" />
                  </div>
             </div>
        </section>
        <section className="section2"></section>
    </div>
  )
}

export default Home
