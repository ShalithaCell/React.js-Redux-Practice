import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'


class Home extends Component {

    state = {
        posts : [ ]
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                this.setState({
                    posts : res.data.slice(0, 10) //fetch 1 to 10
                })
            })
    }

    render(){

        const { posts } = this.state;
        
        const postList = posts.length ? (
            posts.map(item => {
                return (
                <div className="post card" key={item.id}>
                    <div className="card content">
                        <Link to={'/' + item.id}>
                            <span className="card-title">{item.title}</span>
                        </Link>
                        <p>{item.body}</p>
                    </div>
                </div>
                )
            })
        ) : (
            <div className="center">No posts yet !
            </div>
        )

        return (
            <div className="container">
                <h4 className="center">Home</h4>
                    {postList}
                </div>
        )

    };
}

export default Home
