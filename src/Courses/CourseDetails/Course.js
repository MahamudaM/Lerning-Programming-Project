import React from 'react';
import { useLoaderData } from 'react-router-dom';

// import cart
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
// pdf
// import ReactDOM from "react-dom";
// import Pdf from "react-to-pdf";
// const ref = React.createRef();

const Course = () => {
    const coursesDetals=useLoaderData()
    const {id,name,details,price,enroll_student,img,Syllabus} = coursesDetals
    console.log(coursesDetals)

    return (
        <div >
        <Card style={{ width: '18rem' }}>
        <Card.Header>Featured

          {/* pdf */}
          {/* <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf> */}

           </Card.Header>
 <Card.Img variant="top" src={img} />
 <Card.Body >
   <Card.Title>{name}</Card.Title>
   <Card.Text>
     {details?.blog}
   </Card.Text>
   <div>
   <span>{details.published_date}</span>
    <span>{Syllabus}</span>
   </div>
   <Link to={`/checkOut/${id}`}>
   <Button variant="primary">Get premium access</Button>
   </Link>
   
 </Card.Body>
</Card>
   </div>
    );
};

export default Course;

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Course />, rootElement);