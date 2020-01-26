import React, { Component } from 'react'
import axios from 'axios'

class Post extends Component{
    state ={
        id : null,
        title : null,
        body : null
    }

    componentDidMount(){
        let id = this.props.match.params.post_id;

        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(res => {
            this.setState({
                id : res.data.id,
                title : res.data.title,
                body : res.data.body
            })
        })
    }

    render(){
        return (
            <div className="container">
                <div className="card">
                    <h5>{this.state.title}</h5>
                    <p>
                        {this.state.body}
                    </p>
                </div>
            </div>
        )
    }
}

export default Post