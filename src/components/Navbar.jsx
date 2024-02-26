import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; // Import the Navbar component from react-bootstrap

function CustomNavbar() { // Rename the function to CustomNavbar
  return (
    <>
      <Navbar bg="primary" variant="dark"> {/* Use variant="dark" instead of data-bs-theme="dark" */}
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/Hello">Features</Nav.Link>
            <Nav.Link href="/fetch">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNavbar; // Export CustomNavbar instead of Navbar
