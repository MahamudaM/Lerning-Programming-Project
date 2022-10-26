import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HomeCarousel from './Carousel/HomeCarousel';
import Image1 from '../image/img1.png';
import Image2 from '../image/images2.jpg';
import ImageBg from '../image/enrolImg.jpg';
import Image4 from '../image/img4.png';
const Home = () => {
    return (
        <div>
          
           {/* carosole start */}
           <div >
<HomeCarousel></HomeCarousel>
           </div>
          
          <div className='aboutUs'>
            <Row>
                <Col lg='5'> 
                </Col>
                <Col lg='7'>

                </Col>
            </Row>
           </div>
           <div className='speciality'>
           <Col lg='4'> 
                </Col>
                <Col lg='4'> 
                </Col>
                <Col lg='4'> 
                </Col>
           </div>
           <div className='Admission my-5' style={{background:`url(${ImageBg})`,backgroundRepeat: 'no-repeat',backgroundSize: '100%',height:'300px'}}>
        <h1>We Bring New Online Courses</h1>
           </div>
           <h2 className='text-center'>Ours Instructors</h2>
           <p className='text-center'>Start working with learn Programming that can provide everything you need to generate awareness, drive traffic, connect.</p>
           <div className='Instructors d-flex flex-row  justify-content-evenly'>

<div>
    <img className='rounded-circle w-50 h-50' src={Image1} alt=''></img>
    <h4>Ronny Jofra</h4>
    <small>Organizer</small>
</div>
<div>
    <img className='rounded-circle w-50 h-50' src={Image4} alt=''></img>
    <h4>Ronny Jofra</h4>
    <small>Event Manager</small>
</div>
<div>
    <img className='rounded-circle w-50 h-50' src={Image1} alt=''></img>
    <h4>Ronny Jofra</h4>
    <small>Motivator</small>
</div>
<div>
    <img className='rounded-circle w-50 h-50' src={Image4} alt=''></img>
    <h4>Ronny Jofra</h4>
    <small>Speaker</small>
</div>

           </div>
          
        </div>
    );
};

export default Home;