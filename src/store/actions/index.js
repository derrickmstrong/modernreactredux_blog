import _ from 'lodash';
import jsonPlaceholder from '../../apis/jsonPlaceholder';

// action creator for async action ie. api call using Redux Thunk as middleware in index.js
export const fetchPosts = () => async (dispatch, getState) => {
  const response = await jsonPlaceholder.get('/posts');
  dispatch({
    type: 'FETCH_POSTS',
    payload: response.data,
  });
};

// export const fetchUser = id => async (dispatch, getState) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({
//     type: 'FETCH_USER',
//     payload: response.data,
//   });
// };

// Solution #1 Adding a fetchUser action that only runs once with each unique user id
// Using lodash _.memoize to prevent the network call everytime the id is hit; now it only hits once
// The "_" in "_fetchUser" notates that the function is private
export const fetchUser = id => (dispatch, getState) => {
  _fetchUser(id, dispatch);
};
const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({
    type: 'FETCH_USER',
    payload: response.data,
  });
});

