import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import HomeClass from './Home'
import CreateForm from './CreateForm'
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

class App extends Component {
  state = {
    obj : [
      {email : 'test@gmail.com' , firstName : 'test' , id : 1, lastName : 'test', userName : 'test'}
    ]
  }

  AddFormDetails = (details) => {
    details.id = Math.random();

    let blueCopyObj = [...this.state.obj, details]

    this.setState({
      obj : blueCopyObj
    })
  }

  DeleteItemHandler = (itemID) => {
    let newObj = this.state.obj.filter(row => {
      return row.id != itemID;
    })

    this.setState({
      obj : newObj
    })
  }

  render(){
    return (
      <div className="App">
        <h1>My First React App</h1>
        <HomeClass deleteItem={this.DeleteItemHandler} obj={this.state.obj}/>
        <CreateForm addMethod={this.AddFormDetails}/>
      </div>
    );
  }
}

export default App;
