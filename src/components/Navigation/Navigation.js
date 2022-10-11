import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Navigation.css'

function Navigation() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Test Your IQ</Navbar.Brand>
                <Nav className="m-auto links">
                    <Link to={'/'}>Home</Link>
                    <Link to={'/statistics'}>Statistics</Link>
                    <Link to={'/blog'}>Blog</Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Navigation;