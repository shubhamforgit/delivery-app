import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


const MainHeader = (props) => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>Delivery!</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav"  >
                    <Nav className="me-auto">
                        <LinkContainer to="/present-orders">
                            <Nav.Link>Present Orders</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/past-orders">
                            <Nav.Link>My History</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Nav>
                        <Navbar.Text>
                            Hi {props.name}!
                        </Navbar.Text>
                        <Button variant="outline-dark" style={{marginLeft: "10px"}} onClick={props.signOut}>Sign Out</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MainHeader