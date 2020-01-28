import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { deletePost} from '../actions/postAction'

class Post extends Component{
    DeleteHandler = () =>{
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/home');
    }

    render(){

        const postCon = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.DeleteHandler}>
                        DeletePost
                    </button>
                </div>
            </div>
        ) : (
            <div className="center">No posts yet</div>
        )

        return (
            <div className="container">
                {postCon}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post : state.posts.find(i => i.id == id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost : (id) => { dispatch(deletePost(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)