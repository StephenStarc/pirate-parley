import {Navbar, Nav, Container} from 'react-bootstrap'
import {FaShoppingCart, FaUser} from 'react-icons/fa'
import {LinkContainer} from 'react-router-bootstrap'

export default function Header(){
    return (
        <header>
        <Navbar varient="dark" expand="md" collapseOnSelect>
            <Container>
                <LinkContainer to='/'>
                <Navbar.Brand>
                    Pirate Parley
                    </Navbar.Brand>
                    </LinkContainer>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                    <LinkContainer to='/cart'>
                        <Nav.Link ><FaShoppingCart />
                        Cart</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/signIn'>
                        <Nav.Link ><FaShoppingCart />Sign-in</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </header>
    )
}