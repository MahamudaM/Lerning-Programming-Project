import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseLayoutCart from './CourseLayoutCart/CourseLayoutCart';
import LeftSideNav from './LeftSideNav/LeftSideNav';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const CoursesLayout = () => {
//    const courses =useLoaderData()
const courseCarts = useLoaderData()

    return (
        <div>
            <Container>
                <Row>
                <Col lg="4" className='d-none d-lg-block'>
                    <LeftSideNav></LeftSideNav>
                    </Col>
                      <Col lg="8">
                      <Row xs={1} md={2} className="g-4">
                        <h1>popular courses</h1>
                      {
            courseCarts.map(courseCart=><CourseLayoutCart key={courseCart.id} courseCart={courseCart}>
                
            </CourseLayoutCart>)
           }
            
            </Row>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    );
};

export default CoursesLayout;