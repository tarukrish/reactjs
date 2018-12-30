import React, { Component } from "react";
import {BrowserRouter, Route , Switch} from "react-router-dom";
import "./App.css";
import Login from "./component/login";
import Column1 from "./component/inner";
import Error from "./component/Error";




class App extends Component {
  

  render() {
   

    return (
      <BrowserRouter>
      
      <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/inner" component={Column1} />
      <Route  component={Error}/>
      </Switch>
      
   
   
      
   </BrowserRouter>
     

     
      
    
      
    );
  }
}

export default App;

