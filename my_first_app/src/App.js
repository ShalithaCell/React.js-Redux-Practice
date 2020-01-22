import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import HomeClass from './Home'
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

class App extends Component {
  state = {
    obj : [
      {name : 'Shalitha', dob : '97-04-21', id : 1},
      {name : 'Peter', dob : '80-04-21', id : 2},
      {name : 'Kevin', dob : '890-04-21', id : 3}
    ]
  }
  render(){
    return (
      <div className="App">
        <h1>My First React App</h1>
        <HomeClass obj={this.state.obj}/>
      </div>
    );
  }
}

export default App;
