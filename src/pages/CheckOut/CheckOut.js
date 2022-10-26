import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const courseInfo=useLoaderData()
    const {id,name,details,price,enroll_student,img} = courseInfo
    console.log(courseInfo)
    return (
        <div>
            <h>I am :{name}</h>
        </div>
    );
};

export default CheckOut;