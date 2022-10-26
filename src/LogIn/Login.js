import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import Form from 'react-bootstrap/Form';
const Login = () => {
    const {loginProvider}=useContext(AuthContext);
const googleProvider=new GoogleAuthProvider()
const handleGoogleSignIn=()=>{
    loginProvider(googleProvider)
    .then(result=>{
        const user=result.user;
        console.log(user)
    })
    .catch(error=>console.error(error))
}
    return (
        <div>
             <ButtonGroup vertical>
             <Button onClick={handleGoogleSignIn} variant="outline-info" className='mb-4'><FaGoogle></FaGoogle>google</Button>{' '}
             <Button  variant="outline-info"><FaGithub></FaGithub>GitHub</Button>{' '}
      </ButtonGroup>
      {/* login form */}
        <Form className='w-50 aling-cneter'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      <Form.Text className="text-danger">
          We'll never share your email with anyone else.
        </Form.Text>
        <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
         
    );
};

export default Login;