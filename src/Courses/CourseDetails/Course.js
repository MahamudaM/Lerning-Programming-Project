import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesDetails from './CoursesDetails';

const Course = () => {
    const coursesDetals=useLoaderData()
    console.log(coursesDetals)
    return (
        <div>
            <h1>i can not seee anythling</h1>
            {
                coursesDetals?.map(courseCart=><CoursesDetails key={courseCart.id} course={courseCart}></CoursesDetails>)
               
            }
        </div>
    );
};

export default Course;