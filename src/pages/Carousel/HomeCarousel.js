import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from "./CarouseImg/css.jpg"
import image2 from "./CarouseImg/react.png"
import image3 from "./CarouseImg/tailwiend.jpg"
const HomeCarousel = () => {
    return (
        <div >
            <Carousel fade>
          
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
          style={{backgroundRepeat: 'no-repeat',backgroundSize: '100%',height:'500px'}}
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
          style={{backgroundRepeat: 'no-repeat',backgroundSize: '100%',height:'500px'}}
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
          style={{backgroundRepeat: 'no-repeat',backgroundSize: '100%',height:'500px'}}
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default HomeCarousel;