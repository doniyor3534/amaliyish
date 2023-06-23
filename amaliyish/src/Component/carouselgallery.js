import React from 'react'
import Carousel from 'better-react-carousel';
import img1 from "../img/gallery1.avif";
import img2 from "../img/gallery2.jpg";
import img3 from "../img/gallery3.jpg";
import img4 from "../img/gallery4.jpg";
import img5 from "../img/gallery5.jpeg";
import img6 from "../img/gallery6.jpg";
import img7 from "../img/gallery7.webp";


export const Gallery = () => {
  return (
    <Carousel cols={2} rows={1} gap={10} loop>
      <Carousel.Item className='galler_item'>
        <img width="100%" height={"400px"} src={img1} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" height={"400px"}  src={img2} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" height={"400px"}  src={img3} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" height={"400px"}  src={img4} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" height={"400px"}  src={img5} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" height={"400px"}  src={img6} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" height={"400px"}  src={img7} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" height={"400px"}  src={img3} />
      </Carousel.Item>
      {/* ... */}
    </Carousel>
  )
}