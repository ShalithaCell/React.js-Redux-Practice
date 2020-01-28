import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


class Home extends Component {

    render(){

        const { posts } = this.props;
        
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

const mapStateToProps = (state) => {
    return {
        posts :  state.posts
    }
}

export default connect(mapStateToProps)(Home)
