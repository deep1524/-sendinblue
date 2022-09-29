import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button, Dropdown, Image } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <Image
            width="200px"
            src="https://www.sendinblue.com/wp-content/themes/sendinblue2019/assets/images/common/logo-color.svg"
            alt="Logo"
          ></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            margin-left="100px"
            className="me-auto"
            style={{ marginLeft: "200px", gap: "10px" }}
          >
            <NavDropdown title="Soluction" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Why sendinblue?
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Enterprise</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#price">Pricing</Nav.Link>

            <NavDropdown title="Features" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Why sendinblue?
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Enterprise</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Resources"
              id="basic-nav-dropdown"
              
            >
              <NavDropdown.Item href="#action/3.1" >
                Learning
              </NavDropdown.Item>
              <Dropdown.Divider />
              <NavDropdown.Item href="#action/3.1">
                Help center
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.1">API Docs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                Sendinblue Academy
              </NavDropdown.Item>
              <Dropdown.Divider />

              <NavDropdown.Item href="#action/3.2">PlateForm</NavDropdown.Item>
              <Dropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                Product updates
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Case Studies
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Service Lab
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Plateform Status
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Plugins</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#blog">blog</Nav.Link>
          </Nav>
          <Nav style={{ marginLeft: "200px" }}>
            {/* <Image style={{ width: "20px" }}>  src="https://www.sendinblue.com/wp-content/plugins/multisite-language-switcher/flags/us.png" </Image> */}
            <NavDropdown title="En" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Deutsch</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.2">Español</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.2">Français</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.2">Italiano</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.2">Português</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="" style={{color:"blacke", fontWeight:"bold" }}>login
           
              </Nav.Link>
            <Button size="sm" style={{ paddingLeft: "5px" }}>
              SignUp free
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
