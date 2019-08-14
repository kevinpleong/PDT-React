import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { Button, FormControl, Form, NavDropdown} from "react-bootstrap";

export default class Nav extends React.Component {
  render() {
    return (
<div>
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Pawsitively Delicious</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="AboutUs.js">About Us</Nav.Link>
      <NavDropdown title="Ingredients" id="basic-nav-dropdown">
        <NavDropdown.Item href="./TypesOfDogTreats">Types of Dog Treats</NavDropdown.Item>
        <NavDropdown.Item href="AllIngredients.js">Ingredients</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
</div>
  );
  } // END OF RENDER
} // END OF Navbar
