import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './components/navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'
import Post from './components/Post'

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/> 
          <Switch>
          <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/:post_id' component={Post} />
            
          </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}

export default App;
