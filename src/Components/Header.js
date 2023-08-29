import React, { useContext } from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import logo from '../../src/images/skills-icon-logo-illustration-skills-symbol-template-for-graphic-and-web-design-collection-free-vector.jpg'
import { Link } from 'react-router-dom';
import { AuthProviderContext } from '../routes/Context/AuthContext';


const Header = () => {
    const { user, logOut } = useContext(AuthProviderContext)
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="https://your-skill.web.app/"> <img className='img-fluid' src={logo} style={{ width: '40px' }} alt='This is your skill logo' /> Your Skill .Com</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
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
                            <div className=''>
                                <div >
                                    {user?.uid ? <Link onClick={logOut}>logOut</Link> : <Link to='/login'>Login</Link>}
                                </div>

                                <div>
                                    <Link to='/profile'>
                                        <img className='rounded-circle' style={{ width: '50px' }} rounded src={user?.photoURL} alt="" />
                                    </Link>
                                </div>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;