import { FETCH_POSTS, CREATE_POST, DELETE_POST } from '../actions/types'

const initialState = {
    postItems: [],
    postItem: {}
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                postItems: action.payload
            }

        case CREATE_POST:
            return {
                ...state,
                postItem: action.payload
            }

        case DELETE_POST:
            console.log('reducer', action.payload);
            return {
                ...state,
                postItems: state.postItems.filter(el => el.id !== action.payload)
            }

        default:
            return state;
    }
}