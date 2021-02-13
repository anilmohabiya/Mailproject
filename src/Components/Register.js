import React, { Component } from 'react';
import {Navbar ,Nav ,Card ,Row,Col,Button,DropdownButton,Dropdown} from 'react-bootstrap';
import img1 from '../images/Logo-1.png';
import Logo2 from '../images/Logo-2.png';
import Profile from '../images/Profile.png';
import Wishlist from '../images/Wishlist 1.png';
import Cart from '../images/Cart.png';
import fire from '../config/fire';
import Footer from './Footer'

class Register extends Component {
  constructor(props) {
    super(props);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleMobileChange = this.handleMobileChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: '',
      mobile:''
    };
  }
  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  handleMobileChange(e) {
    this.setState({ mobile: e.target.value });
  }

  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
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
            <img class="card-img" style={{height: 450 ,width :500}} src={img1} alt="Card image" />
  <div class="card-img-overlay">
  <Col><Card.Body>
            <form>
            <div className="form-group">
                  <input className="fas fa-user" type="email" value={this.state.email} onChange={this.handleEmailChange} className="form-control" placeholder="Enter Email" />
              </div>

              <div class="form-group">
						<div class="input-group">
							<span class="input-group-addon"><i class="fa fa-user"></i></span>
							<input type="text" class="form-control" name="username" value={this.state.password} onChange={this.handlePasswordChange} placeholder="Password" required="required" />
						</div>
				</div>

              <div className="form-group">
                  <input className="fas fa-user" type="email" className="form-control"  value={this.state.mobile} onChange={this.handleMobileChange} placeholder="Enter mobile no." />
              </div>

              <div className="form-group">
                  <input type="password" className="form-control" placeholder="Enter password" />
              </div>

               <div className="form-group">
                  <input type="password" className="form-control" placeholder="Confirm password" />
              </div> 

              <button type="submit"  className="btn btn-warning btn-block" onClick={this.signup} variant="light">Register</button>
              <button type="submit"  className="registerbutton" className=" btn-block" >Existing user? Login</button>
            </form>
              </Card.Body></Col>
              </div>
            </Card>
          </Row>
          <Footer/>
    </div>
  );
}
}

export default Register;
