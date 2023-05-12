/* eslint-disable no-unused-vars */
import React, { createContext, useContext } from 'react';
import { Button, Container, Nav, NavDropdown, NavLink, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from './provider/AuthProvider';


const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    console.log(user)
    return (
        <div >
            <Container><Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home"><img src="../public/images/navphoto.png" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">

                            <button className='btn btn tertiary ne'><Link to="/" className='text-decoration-none'>Home</Link></button>
                            <button className='btn btn tertiary'><Link to="/blog" className='text-decoration-none'>Blog</Link></button>

                        </Nav>

                        <Nav> {
                            user?.photoURL ? <><span ><img src={user?.photoURL} className='rounded-circle w-25 ' title={user?.displayName
                            } alt="" /></span> <button onClick={handleLogOut} className='btn btn primary'>SingOut</button></> : <button className='btn btn primary '><Link to="/login" className='text-decoration-none'>Login</Link></button>

                        }
                        </Nav>




                    </Navbar.Collapse>
                </Container>
            </Navbar></Container>
        </div>
    );
};

export default Header;