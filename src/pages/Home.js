import React from 'react';
import HomeCarousel from './Carousel/HomeCarousel';

const Home = () => {
    return (
        <div>
           <h1>this is home</h1> 
           {/* carosole start */}
           <div >
<HomeCarousel></HomeCarousel>
           </div>
        </div>
    );
};

export default Home;