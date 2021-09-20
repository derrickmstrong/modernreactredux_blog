import _ from 'lodash';
import jsonPlaceholder from '../../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  // Dispatch fetchPosts action before moving on with await
  await dispatch(fetchPosts());
  // Get all post (100 total) and pull off just the userId and get only unique Ids
  //    const userIds =  _.uniq(_.map(getState().posts, 'userId'))
  //    console.log(userIds)
  //    userIds.forEach(id => dispatch(fetchUser(id)));

  // Same as lines 8-10 via lodash
  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
};

// action creator for async action ie. api call using Redux Thunk as middleware in index.js
export const fetchPosts = () => async (dispatch, getState) => {
  const response = await jsonPlaceholder.get('/posts');
  dispatch({
    type: 'FETCH_POSTS',
    payload: response.data,
  });
};

export const fetchUser = id => async (dispatch, getState) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({
    type: 'FETCH_USER',
    payload: response.data,
  });
};

// Optional Solution instead of fetchPostsAndUsers - Adding a fetchUser action that only runs once with each unique user id
// Using lodash _.memoize to prevent the network call everytime the id is hit; now it only hits once
// The "_" in "_fetchUser" notates that the function is private
// export const fetchUser = id => (dispatch, getState) => {
//   _fetchUser(id, dispatch);
// };
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({
//     type: 'FETCH_USER',
//     payload: response.data,
//   });
// });
