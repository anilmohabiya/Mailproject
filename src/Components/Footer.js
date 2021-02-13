import React, { Component } from 'react';
import {Navbar ,Nav ,Card ,Row,Col,Button,DropdownButton,Dropdown} from 'react-bootstrap';

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <Card >
            <Card.Body>
            <h2>Newsletter</h2>
            <div>
            <Row>
            <p style={{paddingLeft:12}}>Suscribe to our newsletter</p>
            <form style={{paddingLeft:150}}>
                  <input style={{width:300}}className="fas fa-user" type="email" className="form-control" placeholder="Enter email" />
            </form>
            <div style={{paddingLeft:100}}>
            <Button variant="warning">Done</Button>
            </div>
            </Row>
            </div>
            </Card.Body>
         </Card>
         <Navbar className="navColor">
           <div className="text-white" style={{paddingLeft: 80}}>
              <p>Get in touch</p>
              <p>+91287846246</p>
              <p>MyMarket@gmail.com</p>
              <p>UAE</p>
            </div>
            <div  style={{paddingLeft: 80}}>
              <Nav.Link className="text-white"  style={{paddingLeft: 80}} varient='light'eventKey={2} href="#call">
                Policies
              </Nav.Link>
              <Nav.Link className="text-white" style={{paddingLeft: 80}} eventKey={2} href="#contact">
                Security
              </Nav.Link>
              <Nav.Link className="text-white" style={{paddingLeft: 80}} eventKey={2} href="#country">
               Return
              </Nav.Link>
              <Nav.Link className="text-white" style={{paddingLeft: 80}} eventKey={2} href="#language">
                Terms & Condition
              </Nav.Link>
              <Nav.Link className="text-white" style={{paddingLeft: 80}} eventKey={2} href="#signIn">
               Other
              </Nav.Link>
            </div>
            <div  style={{paddingLeft: 80}}>
              <Nav.Link className="text-white"  style={{paddingLeft: 80}} varient='light'eventKey={2} href="#call">
                Special Categories
              </Nav.Link>
              <Nav.Link className="text-white" style={{paddingLeft: 80}} eventKey={2} href="#contact">
                More
              </Nav.Link>
              <Nav.Link className="text-white" style={{paddingLeft: 80}} eventKey={2} href="#country">
               Women
              </Nav.Link>
              <Nav.Link className="text-white" style={{paddingLeft: 80}} eventKey={2} href="#language">
                Kids
              </Nav.Link>
              <Nav.Link className="text-white" style={{paddingLeft: 80}} eventKey={2} href="#signIn">
               Electronics
              </Nav.Link>
              <Nav.Link className="text-white" style={{paddingLeft: 80}} eventKey={2} href="#signIn">
               Accessories
              </Nav.Link>
            </div>
            <div  style={{paddingLeft: 80}}>
              <Nav.Link className="text-white"  style={{paddingLeft: 80}} varient='light'eventKey={2} href="#call">
                Quick Links
              </Nav.Link>
              <Nav.Link className="text-white" style={{paddingLeft: 80}} eventKey={2} href="#contact">
                My Account
              </Nav.Link>
              <Nav.Link className="text-white" style={{paddingLeft: 80}} eventKey={2} href="#country">
               My Order
              </Nav.Link>
              </div>
          </Navbar>
          <Card className="text-center">
            <Card.Footer className="text-muted">Copyright @2020 By MY MARKET</Card.Footer>
          </Card>
        </div>
               
           
);

    }


}

export default Footer;
