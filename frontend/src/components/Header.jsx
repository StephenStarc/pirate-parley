import {Navbar, Nav, Container} from 'react-bootstrap'
import {FaShoppingCart, FaUser} from 'react-icons/fa'
import {LinkContainer} from 'react-router-bootstrap'
import { useSelector } from 'react-redux'
import {Badge} from 'react-bootstrap'
export default function Header(){

    const {cartItems }= useSelector(state => state.cart)
    console.log(cartItems)
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
                        Cart
                        {cartItems.length > 0 && (
                            <Badge pill bg='success' style={{marginLeft:'5px'}}>
                                {cartItems.reduce((a,c) => a+c.qty,0)}
                            </Badge>
                        )}
                        </Nav.Link>
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