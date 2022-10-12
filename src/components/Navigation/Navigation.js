import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css'

function Navigation() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className='text-success fw-bold fs-2' href="/">Test Your IQ</Navbar.Brand>
                <Nav className="m-auto links">
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/statistics'}>Statistics</NavLink>
                    <NavLink to={'/blog'}>Blog</NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Navigation;