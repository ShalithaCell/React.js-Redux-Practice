import React, { Component } from 'react';

class AddTodo extends Component{
    state = {
        content : ''
    }

    TextChangeHandler =(e) =>{
        this.setState({
            content : e.target.value
        })
    }

    SubmitHandler = (e) =>{
        e.preventDefault();
        console.log(this.state.content);
        this.props.addTodo(this.state);

        this.setState({
            content : ''
        })
    }

    render(){
        return(
            <form className="input-field col s6" onSubmit={this.SubmitHandler}>
                <input placeholder="Enter your todo here" type="text" value={this.state.content} className="validate" onChange={this.TextChangeHandler}/>
            </form>
        )
    }
}

export default AddTodo;