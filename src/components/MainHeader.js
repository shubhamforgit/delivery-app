import { Navbar, Container, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


const MainHeader = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>Delivery!</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/present-orders">
                            <Nav.Link>Present Orders</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/past-orders">
                            <Nav.Link>My History</Nav.Link>
                        </LinkContainer>
                        <button>Sign Out</button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MainHeader