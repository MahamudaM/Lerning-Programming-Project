import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
    const [error,setError]=useState('');
    const navigate=useNavigate()
    const {loginProvider,signIn,logInWithGithub}=useContext(AuthContext);
const location = useLocation()
const from = location.state?.from?.pathname || '/'
    // sing in with google
const googleProvider=new GoogleAuthProvider()
const handleGoogleSignIn=()=>{
    loginProvider(googleProvider)
    .then(result=>{
        const user=result.user;
        console.log(user)
    })
    .catch(error=>console.error(error))
}
// sign in with github
const gitHubProvider = new GithubAuthProvider()
const githubHandler=()=>{
    logInWithGithub(gitHubProvider)
    .then(result=>{
        const user =result.user;
        console.log(user)
    })
    .catch(error=>console.error(error))
}
//form login with email and password
const loginHandler=e=>{
    e.preventDefault();
    const form=e.target;
    const email= form.email.value;
    const password=form.password.value;
    console.log(email,password)
    signIn(email,password)
    .then(result=>{
        const user = result.user;
        console.log(user)
        form.reset()
        setError('')
        navigate(from,{replace:true});
    })
    .catch(error=>{
        console.error(error)
        setError(error.message)
    })
}

    return (
        <div>
             <ButtonGroup vertical>
             <Button onClick={handleGoogleSignIn} variant="outline-info" className='mb-4'><FaGoogle></FaGoogle>google</Button>{' '}
             <Button onClick={githubHandler}  variant="outline-info"><FaGithub></FaGithub>GitHub</Button>{' '}
      </ButtonGroup>
      {/* login form */}
        <Form onSubmit={loginHandler} className='w-50 aling-cneter'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" required/>
      </Form.Group>
      
      <Form.Text className="text-danger">
        {error}
        </Form.Text><br/>
        <Button variant="primary" type="submit">
        login
      </Button>
    </Form>
    <small>No acount? </small><Link to='/register'>Register first</Link>
        </div>
         
    );
};

export default Login;