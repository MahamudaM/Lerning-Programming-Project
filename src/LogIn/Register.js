import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import  { AuthContext } from '../Context/AuthProvider/AuthProvider';
const Register = () => {
    const navigate=useNavigate()
    const {creatUserEmailPasswod}=useContext(AuthContext)
    const [error,setError]=useState('');

    const handleFormSubmit=(e)=>{
        e.preventDefault()
        const form=e.target;
        const name = form.name.value;
        const imageURL = form.imageURL.value;
        const email= form.email.value;
        const password=form.password.value
        console.log(name,email,password,imageURL)
        creatUserEmailPasswod(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user)
            form.reset()
            setError('')
            navigate('/')
        })
        .catch(error=>{
            console.error(error);
            setError(error.message)
        })
    }
    return (
        <div>
             <Form onSubmit={handleFormSubmit} className='w-50 aling-cneter'>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image URL</Form.Label>
        <Form.Control type="text" name='imageURL' placeholder="Image URL" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" placeholder="email"  required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required />
      </Form.Group>
      
      <Form.Text className="text-danger">
         {error}
        </Form.Text><br/>
        <Button variant="primary" type="submit">
      Register
      </Button>
    </Form>
        </div>
    );
};

export default Register;