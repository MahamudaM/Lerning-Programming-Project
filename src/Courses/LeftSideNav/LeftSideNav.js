import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftSideNav.css'
const LeftSideNav = () => {
    const [courses,setCourses]=useState([])
    useEffect(()=>{
fetch('http://localhost:5000/courses')
.then(res=>res.json())
.then(data=>setCourses(data))
    },[])
    return (
        <div>
           
           {
            courses.map(course=><p key={course.id} style={{listStyle:'none'}}>
                <Link to={`/courses/${course.id}`} className='text-decoration-none'>{course.name}</Link>
            </p>)
           }
           
      </div>
    );
};

export default LeftSideNav;