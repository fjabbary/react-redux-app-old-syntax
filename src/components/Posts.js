import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts, deletePost } from '../actions/postActions'
import styled from 'styled-components';

export class Posts extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        const postJSX = this.props.posts.map(post => {
            return (
                <PostCard key={post.id}>
                    <h1>{post.title} <Button onClick={this.props.deletePost.bind(this, post.id)}>X</Button> </h1>
                    <p>{post.body}</p>
                </PostCard>
            )
        })

        return (
            <div>
                {postJSX}
            </div>
        )
    }
}

const mapStateToProps = (state => ({
    posts: state.posts.postItems
}))

export default connect(mapStateToProps, { fetchPosts, deletePost })(Posts)

const PostCard = styled.div`
    padding: 20px;
    border: 1px solid black;
    background: #eee;
    width: 80%;
    margin: 15px auto;
`

const Button = styled.button`
    color: red;
    font-size: 1.5rem;
    cursor: pointer;
`