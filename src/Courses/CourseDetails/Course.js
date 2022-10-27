import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Course.css'
// import cart
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaFilePdf } from 'react-icons/fa';
// pdf

import Pdf from "react-to-pdf";
const ref = React.createRef();

const Course = () => {
    const coursesDetals=useLoaderData()
    const {id,name,details,price,enroll_student,img,Syllabus} = coursesDetals
    console.log(coursesDetals)

    return (
        <div  className='mx-auto my-5'>
        <Card  style={{ width: '35rem' }}>
        <Card.Header><FaFilePdf></FaFilePdf>

          {/* pdf part */}
          <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
       
           </Card.Header>
 <Card.Img  variant="top" src={img} ref={ref} />
 <Card.Body >
   <Card.Title>{name}</Card.Title>
   <Card.Text>
     {details?.blog}
   </Card.Text>
   <h5>{Syllabus}</h5>
   
    
   <div className='d-flex justify-content-between'>
    <div>
    <p className='mb-0'> {enroll_student} </p>
    <p>published date : {details.published_date}</p>
    </div>
   <h3>price: ${price}</h3>
   </div>
   <Link to={`/checkOut/${id}`}>
   <Button variant="info">Get premium access</Button>
   </Link>
   
 </Card.Body>
</Card>
   </div>
    );
};

export default Course;

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Course />, rootElement);