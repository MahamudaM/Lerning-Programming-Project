import React from 'react';
import { useLoaderData } from 'react-router-dom';

// import cart
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Course = () => {
    const coursesDetals=useLoaderData()
    const {id,name,details,price,enroll_student,img} = coursesDetals
    console.log(coursesDetals)
    return (
        <div>
        <Card style={{ width: '18rem' }}>
 <Card.Img variant="top" src={img} />
 <Card.Body>
   <Card.Title>{name}</Card.Title>
   <Card.Text>
     {details?.blog}
   </Card.Text>
   <Link to='/checkOut'>
   <Button variant="primary">Checkout</Button>
   </Link>
   
 </Card.Body>
</Card>
   </div>
    );
};

export default Course;