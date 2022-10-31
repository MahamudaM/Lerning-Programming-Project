import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const CheckOut = () => {
    const courseInfo=useLoaderData()
    const {user}=useContext(AuthContext)
    console.log(user)
    const {name,details,enroll_student} = courseInfo
    console.log(courseInfo)
    return (
        <div className='my-5'>
            <div className='border border-2 rounded my-3  mx-auto p-3' style={{width:'20%'}}>
            <h4>Name : {user.displayName}</h4>
            <p>email : {user.email}</p>
            </div>
        <div className='border border-2 rounded  mx-auto p-3' style={{width:'20%'}}>
           
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