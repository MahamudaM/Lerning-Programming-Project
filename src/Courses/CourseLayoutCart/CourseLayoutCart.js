import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CourseLayoutCart = ({courseCart}) => {
    const {name,img,details,id}=courseCart
    console.log(courseCart)
    return (
        <div>
             <Col>
          <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                {
                    details?.blog.length>80?
                    <p>{details?.blog.slice(0,80) + '.....'} <Link to={`/courses/${id}`}>Details</Link></p>
                :<p>{details?.blog}</p>
                }
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </div>
    );
};

export default CourseLayoutCart;