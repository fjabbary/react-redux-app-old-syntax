import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPost } from '../actions/postActions'

export class PostForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            title: this.state.title,
            body: this.state.body
        }

        this.props.createPost(newPost);
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Title: </label>
                        <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Body: </label>
                        <input type="text" name="body" value={this.state.body} onChange={this.handleChange} />
                    </div><br />
                    <button type="submit">Submit</button>
                </form>
            </>
        )
    }
}

export default connect(null, { createPost })(PostForm); 