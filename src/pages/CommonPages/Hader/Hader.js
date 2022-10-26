import React, { useContext, useEffect, useState } from 'react';
import { Button, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaChalkboardTeacher, FaUser} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

import RightSideNav from '../../../Courses/LeftSideNav/LeftSideNav';
const Hader = () => {
  const {user,logOut}=useContext(AuthContext)
  const logOutHandle=()=>{
    logOut()
    .then(()=>{})
    .catch(error=>console.log(error))
  }
  // user name tooltip
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
    
      {
         
       user?.displayName? `${user?.displayName}` : 'no user login'
      
      }
    </Tooltip>
  );

  // light and drak mode 
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
    console.log(document.body.className)
  }, [theme]);
    return (
        <Navbar collapseOnSelect  expand="lg" bg="light" variant="light" >
      <Container>
        <Navbar.Brand className='fs-3'><FaChalkboardTeacher></FaChalkboardTeacher></Navbar.Brand>
        <Navbar.Brand >Learn Programming</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

           

          </Nav>
          <Nav>
          <Nav.Link href={`/course`}>courses</Nav.Link>
          <Nav.Link href="#deets">
            {
          user?.uid?
          <>
          {/* <span>{user?.displayName}</span>           */}
          {/* <Button onClick={logOutHandle} variant="outline-success">Log out</Button>{' '} */}
          {/* <Nav.Link href="#deets" onClick={logOutHandle} >Log out</Nav.Link> */}
          <p onClick={logOutHandle}>Log out</p>
          </>
          :
          <div >
          <Link to='/login' className="me-2">login</Link>
          <Link to='/register'>Register</Link>          
          </div>
          }
          </Nav.Link>
          {/* tooltip */}
          <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
          <Nav.Link href="#deets">
          {user?.photoURL?
          <Image style={{height:'30px'}} roundedCircle src={user.photoURL}></Image>
          :<FaUser></FaUser>
        }            
          </Nav.Link>
          </OverlayTrigger>


          {/* <Nav.Link href="/login">Sig in </Nav.Link> */}
            <Nav.Link href="#deets">FAQ</Nav.Link>
            <Nav.Link href="/blog">BLOG</Nav.Link>
            {/* light and drak mode */}
            {/* <div className={`Hader ${theme}`}> */}
      <button onClick={toggleTheme}>Toggle Theme</button>
      
    {/* </div> */}
            {/* <Nav.Link eventKey={2} href="#memes"  onClick={toggleTheme}>
            Toggle Theme
            </Nav.Link> */}
          </Nav>
          <div className='d-lg-none'>
            <RightSideNav></RightSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Hader;