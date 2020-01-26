import React, { Component } from 'react';
import Todos from './todo'
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import AddTodo from './AddTodo';

class App extends Component {

  state = {
     todo : [
            {id : 1, content : 'buy some milk'},
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

  AddTodo = (obj) => {
    obj.id = Math.random();

    let todos = [...this.state.todo, obj];

    this.setState({
      todo : todos
    })
  }

  render(){
  return (
    <div className="todo-app container">
      <h1 className="text-center text-primary" >Todo</h1>
      <Todos todos={this.state.todo} deleteHandler={this.RemoveItem}/>
      <AddTodo addTodo={this.AddTodo}/>
    </div>
  );
  }
}

export default App;
