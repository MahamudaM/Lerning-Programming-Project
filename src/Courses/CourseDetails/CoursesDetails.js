import React from 'react';
import CourseLayoutCart from '../CourseLayoutCart/CourseLayoutCart';
import Course from './Course';
// import cart
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const CoursesDetails = ({course}) => {
    const {id,name,details,price,enroll_student,img} = course
console.log(course)
    return (
        <div>
             <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {details?.blog}
        </Card.Text>
        <Link>
        <Button variant="primary">Checkout</Button>
        </Link>
        
      </Card.Body>
    </Card>
        </div>
    );
};

export default CoursesDetails;