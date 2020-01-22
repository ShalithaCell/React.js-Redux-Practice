import React, {  Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class CreateForm extends Component{
    state = {
        email : null,
        firstName : null,
        lastName : null,
        userName : null
    }

    TextChangeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    FormSubmitHandler = (e) => {
        e.preventDefault();
        this.props.addMethod(this.state)
    }

    render(){
        return(
            <div className ="container-fluid bg-light py-3">
                <div className ="row">
                    <div className ="col-md-6 mx-auto">
                            <div className ="card card-body">
                                <h3 className ="text-center mb-4">Sign-up</h3>
                                <form onSubmit={this.FormSubmitHandler}>
                                    <div className ="form-group has-error">
                                        <input className ="form-control input-lg" placeholder="E-mail Address" name="email" type="text" onChange={this.TextChangeHandler}/>
                                    </div>
                                    <div className ="form-group has-error">
                                        <input className ="form-control input-lg" placeholder="First name" name="firstName" type="text" onChange={this.TextChangeHandler}/>
                                    </div>
                                    <div className ="form-group has-error">
                                        <input className ="form-control input-lg" placeholder="Last name" name="lastName" type="text" onChange={this.TextChangeHandler}/>
                                    </div>
                                    <div className ="form-group has-error">
                                        <input className ="form-control input-lg" placeholder="User name" name="userName" type="text" onChange={this.TextChangeHandler}/>
                                    </div>
                                    <input className ="btn btn-lg btn-primary btn-block" value="Submit" type="submit"/>
                                </form>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default CreateForm