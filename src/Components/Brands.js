import React, { Component } from 'react';
import {Navbar ,Nav ,Card ,Row,Modal,Button,DropdownButton,Dropdown} from 'react-bootstrap';
import img1 from '../images/Logo-1.png';
import Profile from '../images/Profile.png';
import Wishlist from '../images/Wishlist 1.png';
import Cart from '../images/Cart.png';
import Beauty from '../images/Beauty.png';
import FaceScrub from '../images/FaceScrub.png';
import GlowMask from '../images/GlowMask.png';
import BodyScrub from '../images/BodyScrub.png';
import Chat from '../images/Chat.png';
import Star from '../images/Star.png';
import Wishlist12 from '../images/Wishlist 12.png';
import Share from '../images/Share.png';
import Cart2 from '../images/Cart 2.png';
import fire from '../config/fire';
import Footer from './Footer'

class Brands extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showModal: false
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.logout = this.logout.bind(this);
  }
  open() {
    this.setState({showModal: true});
  }
  
  close() {
    this.setState({showModal: false});
  }

  logout() {
    fire.auth().signOut();
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
                <button onClick={this.logout}>LOGOUT</button>
                </Nav.Link>
            </Navbar>
            <Navbar variant="light" bg="light" className="border-bottom border-secondary" style={{height :80,paddingLeft:100,marginBottom:1.5}} >
                <div>
                    <img src={img1} style={{height :80}}/>
                    <p1 style={{paddingLeft:30}}>Home</p1><br/>
                    {/* <p2 style={{paddingLeft:70 ,paddingTop:10}}>5th Avenue,Mumbai</p2> */}
                    </div>
                    {/* <div className="dropdown" className="navColor">
                        <DropdownButton className="dropdown" title="All">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>
                        </div> */}
                        {/* <div>
                        <DropdownButton  style={{width: 500}}varient="info" title="All">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>
                        </div> */}
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
            </Navbar>
         
                <Row className="justify-content-md-center">
                    <img src={Beauty} />
                </Row>
            <Navbar >
                <Nav.Link href="#new-arrival" className="text-dark" style={{paddingLeft: 150}}>Home</Nav.Link>
                    <Nav.Link href="#offers-sale" className="text-dark" style={{paddingLeft: 80}}>New Launches</Nav.Link>
                    <Nav.Link href="#new-arrival" className="text-dark" style={{paddingLeft: 80}}>Best Selling</Nav.Link>
                    <Nav.Link href="#offers-sale" className="text-dark" style={{paddingLeft: 80}}>All Catogories</Nav.Link>
                    <Nav.Link href="#offers-sale" className="text-dark" style={{paddingLeft: 80,paddingRight:80}}>More</Nav.Link>
                    <button class="buttoncircle button5">Follow</button>
                    <img src={Chat} onClick={this.open}  style={{height:50,width:90 ,paddingLeft:50}} />
                    <div>
                <Modal className="modal-container1" 
                show={this.state.showModal} 
                animation={true} 
                bsSize="small">

                <Modal.Header className="navColor">
                    <Modal.Title className="text-white">
                    <h1>*</h1>
                    <h5>Hello John Doe,</h5>
                    <h6>We are here to help</h6>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body >
                  
                </Modal.Body>

                <Modal.Footer>
                </Modal.Footer>         
                </Modal> 
            </div>
            </Navbar>
            <Card style={{height:200}}>
                <Card.Body>
                    <Row>
                        <img src={FaceScrub} style={{height:150,width:400 ,paddingLeft:150}} />
                        <img src={GlowMask} style={{height:150,width:300 ,paddingLeft:150}} />
                        <img src={BodyScrub} style={{height:150,width:400 ,paddingLeft:150}} />
                    </Row>
                </Card.Body>
            </Card>
            <Card style={{paddingBottom:5}}>
                <Card.Body>
                    <p>Best Selling</p>
                    <Row style={{height:200}}>
                        <img src={FaceScrub} style={{height:150,width:320 ,paddingLeft:100}} />
                        <img src={GlowMask} style={{height:150,width:250 ,paddingLeft:100}} />
                        <img src={BodyScrub} style={{height:150,width:320 ,paddingLeft:100}} />
                        <img src={FaceScrub} style={{height:150,width:320 ,paddingLeft:100}} />
                    </Row>
                </Card.Body>
            </Card>
         <Card style={{height:300}}>
            <Card.Body>
               <Row>
                    <div >
                        {/* <div>
                        <img src={Wishlist} style={{height:15,width:25 ,paddingLeft:10}} />
                        <img src={Cart2} style={{height:15,width:25 ,paddingLeft:40}} />
                        </div>
                        <img src={Share} style={{height:15,width:25 ,paddingLeft:10}} /> */}
                        <img src={FaceScrub} style={{height:150,width:320 ,paddingLeft:100}} />
                       
                        <div style={{paddingTop:10,paddingLeft:150}}>
                        <p>Face Scrub</p>
                        <p>4.2<img src={Star} style={{height:15,width:25 ,paddingLeft:10}} />
                        <img src={Star} style={{height:15,width:20 }} />
                        <img src={Star} style={{height:15,width:20 }} />
                        <img src={Star} style={{height:15,width:20 }} />
                        <img src={Star} style={{height:15,width:20 }} /></p>
                        <p>50 BHD</p>
                        </div>
                    </div>  
                    <div>
                        <img src={GlowMask} style={{height:150,width:250 ,paddingLeft:100}} />
                        <div style={{paddingTop:10,paddingLeft:150}}>
                            <p>Glow Mask</p>
                            <p>4.2<img src={Star} style={{height:15,width:25 ,paddingLeft:10}} />
                            <img src={Star} style={{height:15,width:20 }} />
                            <img src={Star} style={{height:15,width:20 }} />
                            <img src={Star} style={{height:15,width:20 }} />
                            <img src={Star} style={{height:15,width:20 }} /></p>
                            <p>50 BHD</p>
                        </div>
                    </div>
                    <div>
                        <img src={BodyScrub} style={{height:150,width:320 ,paddingLeft:100}} />
                        <div style={{paddingTop:10,paddingLeft:150}}>
                            <p>Body Scrub</p>
                            <p>4.2<img src={Star} style={{height:15,width:25 ,paddingLeft:10}} />
                            <img src={Star} style={{height:15,width:20 }} />
                            <img src={Star} style={{height:15,width:20 }} />
                            <img src={Star} style={{height:15,width:20 }} />
                            <img src={Star} style={{height:15,width:20 }} /></p>
                            <p>50 BHD</p>
                        </div>
                    </div>
                    <div>
                        <img src={FaceScrub} style={{height:150,width:320 ,paddingLeft:100}} />
                        <div style={{paddingTop:10,paddingLeft:150}}>
                            <p>Face Scrub</p>
                            <p>4.2<img src={Star} style={{height:15,width:25 ,paddingLeft:10}} />
                            <img src={Star} style={{height:15,width:20 }} />
                            <img src={Star} style={{height:15,width:20 }} />
                            <img src={Star} style={{height:15,width:20 }} />
                            <img src={Star} style={{height:15,width:20 }} /></p>
                            <p>50 BHD</p>
                        </div>
                    </div>
               </Row>
            </Card.Body>
         </Card>
         <Footer />
    </div>
  );
}
}

export default Brands;
