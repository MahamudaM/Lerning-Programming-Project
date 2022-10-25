import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RightSideNav = () => {
    const [courses,setCourses]=useState([])
    useEffect(()=>{
fetch('http://localhost:5000/courses')
.then(res=>res.json())
.then(data=>setCourses(data))
    },[])
    return (
        <div>
           <h1>data : {courses.length}</h1> 
           {
            courses.map(course=><p key={course.id}>
                <Link to={`/course/${course.id}`}>{course.name}</Link>
            </p>)
           }
      </div>
    );
};

export default RightSideNav;