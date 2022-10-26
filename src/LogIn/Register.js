import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import  { AuthContext } from '../Context/AuthProvider/AuthProvider';
const Register = () => {
    const {creatUserEmailPasswod}=useContext(AuthContext)
    const handleFormSubmit=(e)=>{
        e.preventDefault()
        const form=e.target;
        const name = form.name.value;
        const imageURL = form.imageURL.value;
        const email= form.email.value;
        const password=form.password.value
        console.log(name,email,password)
        creatUserEmailPasswod(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user)
            form.reset()
        })
        .catch(error=>console.error(error))
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
          We'll never share your email with anyone else.
        </Form.Text>
        <Button variant="primary" type="submit">
      Register
      </Button>
    </Form>
        </div>
    );
};

export default Register;