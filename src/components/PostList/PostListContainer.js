import { connect } from 'react-redux';
import { fetchPosts, fetchPostsAndUsers } from '../../store/actions';

import PostList from './PostList'

const mapStateToProps = state => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => dispatch(fetchPosts()), // No longer in use
    getPostsAndUsers: () => dispatch(fetchPostsAndUsers()),
  };
};

// First argument to connect is mapStateToProp, second argument mapStateToDispatch
export default connect(mapStateToProps, mapDispatchToProps)(PostList);
