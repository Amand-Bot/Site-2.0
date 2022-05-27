import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavMenu() {
    return (
        <>
            <Navbar collapseOnSelect fixed='top' expand='lg' bg='light' variant='dark'>
                <Container>
                    <Navbar.Brand className='fs-2 text-success'>EXIN</Navbar.Brand>
                    <Navbar.Toggle className='text-dark bg-success' arial-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav>
                            <Nav.Link><Link className='nav-link text-success fs-4 text-decoration-none' to="/">Inicio</Link></Nav.Link>
                            <Nav.Link><Link className='nav-link text-success fs-4 text-decoration-none' to="/portal">Portal</Link></Nav.Link>
                            <Nav.Link><Link className='nav-link text-success fs-4 text-decoration-none' to="/cadastro">Cadastro</Link></Nav.Link>
                            <Nav.Link><Link className='nav-link text-success fs-4 text-decoration-none' to="/secretaria">Secretaria</Link></Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>


    )
}