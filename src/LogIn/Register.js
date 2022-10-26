import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import  { AuthContext } from '../Context/AuthProvider/AuthProvider';
const Register = () => {
    const navigate=useNavigate()
    const {creatUserEmailPasswod,updateUserProfile}=useContext(AuthContext)
    const [error,setError]=useState('');
    // accepts terms and condition
    const [checkTerms,setCheckTerms]=useState(false)

    const handleFormSubmit=(e)=>{
        e.preventDefault()
        const form=e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email= form.email.value;
        const password=form.password.value
        console.log(name,email,password,photoURL)

        creatUserEmailPasswod(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user)
            form.reset()
            setError('')
            navigate('/')
            updateUserInfoHandler(name,photoURL)
        })
        .catch(error=>{
            console.error(error);
            setError(error.message)
        })
    }
    // update user profile
    const updateUserInfoHandler=(name,photoURL)=>{
      const profile={
        displayName:name,
        photoURL:photoURL
      }
      updateUserProfile(profile)
      .then(()=>{})
      .catch(error=>console.error(error))
    }
    // terms and condition handler
    const acceptsTermsHandler=(e)=>{
      setCheckTerms(e.target.checked)
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
        <Form.Control type="text" name='photoURL' placeholder="photoURL" />
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
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check 
        type="checkbox"
        onClick={acceptsTermsHandler}
         label={<>Accepts <Link to="/terms"> our terms and condition</Link></>} />
      </Form.Group>

        <Button variant="primary" type="submit" disabled={!checkTerms}>
      Register
      </Button>
     
    </Form>
    <small>Already have a acount <Link to='/login'>login</Link> </small>
        </div>
    );
};

export default Register;