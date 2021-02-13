import React, { Component } from 'react';
import {Navbar ,Nav ,Card ,Row,Col,Button,DropdownButton,Dropdown} from 'react-bootstrap';
import img1 from '../images/Logo-1.png';
import Profile from '../images/Profile.png';
import Wishlist from '../images/Wishlist 1.png';
import Cart from '../images/Cart.png';
import fire from '../config/fire';
import Logo2 from '../images/Logo-2.png';
import Footer from './Footer'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.login = this.login.bind(this);
  }

  login(e) {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    fire.auth().signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully Logged In');
      })
      .catch((err) => {
        console.log('Error: ' + err.toString());
      })
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
                <p1 style={{paddingLeft:30}}>Home</p1>
                {/* <p2>5th Avenue,Mumbai</p2> */}
            </div>
                {/* <div className="dropdown">
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
            <Nav.Link href="#brands" className="text-dark" style={{paddingLeft: 150}}>Brands</Nav.Link>
              <Nav.Link href="#myfollowing" className="text-dark" style={{paddingLeft: 80}}>My Following</Nav.Link>
              <Nav.Link href="#new-arrival" className="text-dark" style={{paddingLeft: 80}}>New Arrival</Nav.Link>
              <Nav.Link href="#offers-sale" className="text-dark" style={{paddingLeft: 80}}>Offers&Sale</Nav.Link>
              <Nav.Link href="#trending" className="text-dark" style={{paddingLeft: 80}}>Trending Products</Nav.Link>
              <Nav.Link href="#sold" className="text-dark" style={{paddingLeft: 80}}>Just Sold</Nav.Link>
            </Nav>
          </Navbar>
         
          <Row className="justify-content-md-center">
              <div class="card" className="navColor" style={{paddingLeft:50,paddingtop:50,height: 450 ,width :500}}>
                <img class="card-img-top" src={Logo2} style={{paddingLeft:40,paddingTop:30,height: 180 ,width :200}} alt="Card image cap" />
                <div class="card-body" style={{paddingLeft:40}}>
                      <p className="text-white"><h1>Hey...</h1><br/>
                              <h3>if you are new here !!!</h3><br/>
                              Sign up with your mobile number to get started
                        </p>
                </div>
              </div>
              <Card style={{height: 450 ,width :500}} >
                <Col><Card.Body>
                    <div style={{ textAlign: '' }}>
                      <div className=" textbox">
                      <i class="fa fa-user text-secondary" aria-hidden="true"></i>
                        <input id="email" placeholder="Enter Email.." class="" type="text"/>
                      </div>
                      <div className="textbox">
                      
                      <i class="fa fa-lock text-secondary" aria-hidden="true"></i>
                        <input id="password"  placeholder="Enter Password.."class="" type="password"/>
                      </div>
                      <input type="checkbox" className="custom-control-input" id="customCheck1" />
                      <label className="custom-control-label ml-4 mt-2" htmlFor="customCheck1">Keep me logged in</label><br/>
                      <button style={{margin: '10px'}} className="btn btn-warning btn-block mt-4" onClick={this.login}>Login</button>
                    </div>
                        <span class="help-block" style={{paddingLeft:100}}>Don't have an account?
                        <a href="/signup" className="button success">Signup</a></span>
                        <p className="forgot-password text-center">
                            <a href="/verification" className="button success">Forgot password?</a>
                        </p>
                </Card.Body></Col>
              </Card>
            </Row>
          <Footer/>
    </div>
  );
}
}

export default Login;
