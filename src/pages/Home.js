import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HomeCarousel from './Carousel/HomeCarousel';
import Image1 from '../image/img1.png';
import Image2 from '../image/images2.jpg';
import ImageBg from '../image/finalBanar.webp';
import Image4 from '../image/img4.png';
import { Link } from 'react-router-dom';
import { FaUniversalAccess } from 'react-icons/fa';
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
           <div className='mt-5  d-flex flex-row  justify-content-around'>
           <Col lg='4'>
            <div className='border border-2 rounded p-5 mx-4'>
              
                <h5>Unlimited Access</h5>
                <p> Throughout this course, you will learn the fundamental programming concepts.</p>
                <Link to ='/register'><button type="button" class="btn btn-outline-info">Enroll Now</button></Link>
                </div> 
                </Col>
                <Col lg='4'> 
                <div className='border border-2 rounded p-5 mx-4'>
                <h5>Expert Teachers</h5>
                <p> Throughout this course, you will learn the fundamental programming concepts.</p>
                <Link to ='/register'><button type="button" class="btn btn-outline-info">Enroll Now</button></Link>
                </div>
                </Col>
                <Col lg='4'>
                <div className='border border-2 rounded p-5 mx-4'>
                    
                <h5>Our Courses</h5>
                <p> Throughout this course, you will learn the fundamental programming concepts.</p>
                <Link to ='/register'><button type="button" class="btn btn-outline-info">Enroll Now</button></Link>
                </div> 
                </Col>
           </div>
           <div className='Admission my-5  align-items-center' style={{background:`url(${ImageBg})`,backgroundRepeat: 'no-repeat',backgroundSize: '100%',height:'300px'}}>
        <h1 className='text-center text-dark'>We Bring New Online Courses</h1>
        <p className='mx-auto text-center w-50 text-dark'>YAY,Enrolment start in learn programming course.This is a  time to do something awsome.Grow your skill to learn Programming with us.</p>
        <div className='text-center'>
        <Link to ='/register'><button type="button" class="btn btn-outline-info">Enroll Now</button></Link>
        </div>
           </div>
           <h2 className='text-center'>Ours Instructors</h2>
           <p className='mx-auto text-center w-50'>Start working with learn Programming that can provide everything you need to generate awareness, drive traffic, connect.</p>

           <div className='Instructors d-flex flex-row  justify-content-evenly'>

<div>
    <img className='rounded-circle w-50 h-50' src={Image1} alt=''></img>
    <h4>Mark Wong</h4>
    <small>Organizer</small>
</div>
<div>
    <img className='rounded-circle w-50 h-50' src={Image4} alt=''></img>
    <h4>Ronny Jofra</h4>
    <small>Event Manager</small>
</div>
<div>
    <img className='rounded-circle w-50 h-50' src={Image1} alt=''></img>
    <h4>Jakel Ban</h4>
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