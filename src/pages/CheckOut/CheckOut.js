import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const courseInfo=useLoaderData()
    const {id,name,details,price,enroll_student,img} = courseInfo
    console.log(courseInfo)
    return (
        <div className='my-5'>
        <div className='border border-2 rounded  mx-auto p-3' style={{width:'20rem'}}>
           
            <h1>{name}</h1>
            {
           <p>{details?.blog.slice(0,80) + '.....'} </p>                
           }
           <p>{enroll_student}</p>
          
        </div>
        </div>
    );
};

export default CheckOut;