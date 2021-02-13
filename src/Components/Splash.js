import React, { Component } from 'react';
import {Navbar ,Nav ,Card ,Row,Col,Button,DropdownButton,Modal, Dropdown} from 'react-bootstrap';
import img1 from '../images/Logo-1.png';
import Logo2 from '../images/Logo-2.png';
import Profile from '../images/Profile.png';
import Wishlist from '../images/Wishlist 1.png';
import Footwear from '../images/Footwear.png';
import Heading from '../images/hEADING BANNER.png';
import Cart from '../images/Cart.png';
import Categories from '../images/Categories.png';
import Footer from './Footer'

class Splash extends Component {
    constructor(props, context) {
        super(props, context);
      
        this.state = {
          showModal: false,
          selectValue: ""
        };
      
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
      }

      handleDropdownChange(e) {
        this.setState({ selectValue: e.target.value });
      }

      open() {
        this.setState({showModal: true});
      }
      
      close() {
        this.setState({showModal: false});
      }

  render(){
  return (
    <div className="app">
            <Navbar className="navColor">
                <Nav.Link className="text-white" eventKey={2} href="#call">
                    CALL US:-+00 0000000000
                </Nav.Link>
                <Nav.Link className="text-white" style={{paddingLeft: 80}} eventKey={2} href="#contact">
                    CONTACT US
                </Nav.Link>
                <Nav.Link className="text-white" style={{paddingLeft: 550}} eventKey={2} href="#country">
                Bahraini -BHD
                </Nav.Link>
                <Nav.Link className="text-white" style={{paddingLeft: 20}} eventKey={2} href="#langua0......g/e">
                    Language
                </Nav.Link>
                <Nav.Link className="text-white" style={{paddingLeft: 20}} eventKey={2} href="#signIn">
                    Sign in
                </Nav.Link>
            </Navbar>
            <Navbar variant="light" bg="light" className="border-bottom border-secondary" style={{height :80,paddingLeft:100,marginBottom:1.5}} >
                <div>
                    <img src={img1} style={{height :80}}/>
                    <p1 style={{paddingLeft:30}}>Home</p1><br/>
                    {/* <p2 style={{paddingLeft:70 ,paddingTop:10}}>5th Avenue,Mumbai</p2> */}
                    </div>
                        <div>
                        <img src={Profile} style={{paddingLeft:810,height:20}}/>
                        <Nav.Link className="text-dark" style={{paddingLeft:800}}href="#new-arrival" >Profile</Nav.Link>
                        </div>
                        <div>
                        <img src={Wishlist} style={{paddingLeft:30,height:20}}/>
                        <Nav.Link className="text-dark" href="#offers-sale" >Wishlist</Nav.Link>
                        </div>
                        <div>
                        <img src={Cart} style={{paddingLeft:20,height:20}}/>
                        <Nav.Link className="text-dark" href="#offers-sale" >Cart</Nav.Link>
                </div>
            </Navbar>
            <Navbar className="border-left-0" className="text-dark" bg="light" >
                <Nav className="mr-auto">
                <Nav.Link href="#new-arrival" className="text-dark" style={{paddingLeft: 150}}>Brands</Nav.Link>
                <Nav.Link href="#offers-sale" className="text-dark" style={{paddingLeft: 80}}>My Following</Nav.Link>
                <Nav.Link href="#new-arrival" className="text-dark" style={{paddingLeft: 80}}>New Arrival</Nav.Link>
                <Nav.Link href="#offers-sale" className="text-dark" style={{paddingLeft: 80}}>Offers&Sale</Nav.Link>
                <Nav.Link href="#trending" className="text-dark" style={{paddingLeft: 80}}>Trending Products</Nav.Link>
                <Nav.Link href="#sold" className="text-dark" style={{paddingLeft: 80}}>Just Sold</Nav.Link>
                </Nav>
                <div>
            <Button onClick={this.open}>Show Modal</Button>
            <div>
                <Modal className="modal-container1" 
                show={this.state.showModal} 
                onHide={this.close}
                animation={true} 
                bsSize="small">

                <Modal.Header className="navColor" closeButton>
                    <Modal.Title><h6>Hello John Doe,<br/>
                    Select your default language and country</h6></Modal.Title>
                </Modal.Header>

                <Modal.Body >
                    <Row>
                    <select style={{paddingBlock:10,paddingRight:20}} id="dropdown" onChange={this.handleDropdownChange}>
                    <option value="Language">Language</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    </select>
                    <select id="dropdown" style={{paddingBlock:10,paddingRight:20}} onChange={this.handleDropdownChange}>
                    <option value="N/A">Country</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    </select>
                    </Row>
                </Modal.Body>

                <Modal.Footer>
                <button type="button"  class="btn btn-warning">  Save  </button>
                </Modal.Footer>         
                </Modal> 
            </div>
        </div>
            </Navbar>
            <Card >
                <Card.Body >
                    <Row>
                    <img className="navColor" style={{paddingLeft: 150}}src={Heading} />
                    </Row>
                </Card.Body>
            </Card>
            <Card style={{height:200}}>
                <Card.Body>
                    <Row>
                    <img style={{paddingLeft: 60}} src={Categories} />
                    </Row>
                </Card.Body>
            </Card>
         <Card>
            <Card.Body >
               <Row>
                    <div >
                    <img className="navColor" style={{paddingLeft: 60}} src={Footwear} />
                    </div>
               </Row>
            </Card.Body>
         </Card>
         <Footwear />
    </div>
  );
}
}

export default Splash;
