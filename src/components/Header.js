import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <div>

<Navbar expand="lg" style={{minHeight:'80px'}} className="bg-light p-0">
      <Container>
        <Navbar.Brand href="/"><span><img style={{width:'50px'}} src="https://i.postimg.cc/zXBDHhbv/pngwing-com-1.png" alt="" /></span><span  ><span className='rounded-2' style={{backgroundColor:'black',color:'white',padding:'5px'}} >Capture</span>Glimpses</span></Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        {/* <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className='text-black'>Home</Nav.Link>
            <Nav.Link href="#link" className='text-black'>About</Nav.Link>
          </Nav>
        </Navbar.Collapse> */}
      </Container>
    </Navbar>

    </div>
  )
}

export default Header