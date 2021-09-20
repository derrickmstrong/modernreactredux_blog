import jsonPlaceholder from '../../apis/jsonPlaceholder'

// action creator for async action ie. api call using Redux Thunk as middleware in index.js
export const fetchPosts = () => async (dispatch, getState) => {
        const response = await jsonPlaceholder.get('/posts')

        dispatch({
            type: 'FETCH_POSTS',
            payload: response.data
        })
    }