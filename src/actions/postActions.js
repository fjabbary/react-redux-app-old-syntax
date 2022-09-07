import { FETCH_POSTS, CREATE_POST, DELETE_POST } from './types';

export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_POSTS,
            payload: data
        }))
}

export const createPost = (newPost) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: { 'content-type': 'application/json' }
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: CREATE_POST,
            payload: data
        }))
}

export const deletePost = (postId) => dispatch => {
    console.log(postId)
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'DELETE'
    }).then(data => dispatch({
        type: DELETE_POST,
        payload: postId
    }))

}

