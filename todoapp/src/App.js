import React, { Component } from 'react';
import Todos from './todo'
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  state = {
     todo : [
            {id : 1, content : 'buy som milk'},
            {id : 2, content : 'watch movies'}
     ]
  }

  //item delete function
  RemoveItem = (id) => {
    const todo = this.state.todo.filter(o=> {
      return o.id !== id
    });

    this.setState({
      todo
    });
  }

  render(){
  return (
    <div className="todo-app container">
      <h1 className="text-center text-primary" >Todo</h1>
      <Todos todos={this.state.todo} deleteHandler={this.RemoveItem}/>
    </div>
  );
  }
}

export default App;
