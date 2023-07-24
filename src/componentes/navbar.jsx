
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import img1 from '../img/Logo_fisdom.png'

function NavScroll({logo, ruta1, nombre_ruta1, ruta2, nombre_ruta2,ruta3, nombre_ruta3, ruta4,nombre_ruta4,ruta5, nombre_ruta5}) {
  return (
    <Navbar fixed='top' variant='ligth'  expand="md" style={{boxShadow:'0px 0px 3px rgb(100, 100, 100)',paddingTop:'12px',paddingBottom:'12px',background:'white'}}>
      <Container fluid>
        <Navbar.Brand style={{marginLeft:'15px'}} href="#"><img style={{width:'130px',marginTop:'-8px'}} src={img1} alt="logo" /></Navbar.Brand>
        <Navbar.Toggle  style={{marginRight:'15px'}} />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link style={{color:'black',fontFamily:'sans-serif'}} href={ruta1}>{nombre_ruta1}</Nav.Link>
            <Nav.Link style={{color:'black',fontFamily:'sans-serif'}} href={ruta2}>{nombre_ruta2}</Nav.Link>
            <Nav.Link style={{color:'black',fontFamily:'sans-serif'}} href={ruta3}>{nombre_ruta3}</Nav.Link>
            <Nav.Link style={{color:'black',fontFamily:'sans-serif',marginRight:'50px'}} href={ruta4}>{nombre_ruta4}</Nav.Link>
            
            <NavDropdown style={{color:'black',fontFamily:'sans-serif'}} title={nombre_ruta5} id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">proyecto1</NavDropdown.Item>
              <NavDropdown.Item href="#action4">proyecto2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item  href="#action5">
                proyecto final
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link style={{color:'white'}} href="#" disabled>
              Link
            </Nav.Link>
          </Nav>

          <Button href="#">Login</Button>
          <Button style={{marginLeft:'10px',marginRight:'30px'}}>Sign up</Button>

            
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;