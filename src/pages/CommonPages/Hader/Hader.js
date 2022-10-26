import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
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
    return (
        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand className='fs-3'><FaChalkboardTeacher></FaChalkboardTeacher></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-uppercase fw-bold fs-4">Learn Programming</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          <Nav.Link href={`/course`}>courses</Nav.Link>
          <Nav.Link href="#deets">
            {
          user?.uid?
          <>
          <span>{user?.displayName}</span>
          <Button onClick={logOutHandle} variant="outline-success">Log out</Button>{' '}
          </>
          :
          <>
          <Link to='/login'>login</Link>
          <Link to='/register'>Register</Link>
          </>
          }
          </Nav.Link>
          <Nav.Link href="#deets">
          {user?.photoURL?
          <Image style={{height:'30px'}} roundedCircle src={user.photoURL}></Image>
          :<FaUser></FaUser>
        }
            
          </Nav.Link>
          {/* <Nav.Link href="/login">Sig in </Nav.Link> */}
            <Nav.Link href="#deets">FAQ</Nav.Link>
            <Nav.Link href="#deets">BLOG</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            toggle theme
            </Nav.Link>
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