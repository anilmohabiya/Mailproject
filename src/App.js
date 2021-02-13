import React, { Component } from 'react';
import Register from "./Components/Register";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Brands from "./Components/Brands";
import Splash from "./Components/Splash";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'; 
import Verification from './Components/Verification';
import fire from './config/fire';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    })
  }
  render() {
    return (
     <div className="App">
        <BrowserRouter >
          <Switch>
          <Route path="/signup" component={Register}/>
          <Route path="/verification" component={Verification}/>
          {this.state.user ?  (<Brands/>) : (<Login />)}
          </Switch>
        </BrowserRouter> 
     </div>
     
    )
}
}

 export default App;