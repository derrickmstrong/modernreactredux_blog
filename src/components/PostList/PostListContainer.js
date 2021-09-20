import { connect } from 'react-redux';
import { fetchPosts } from '../../store/actions';

import PostList from './PostList'

const mapStateToProps = state => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => dispatch(fetchPosts()),
  };
};

// First argument to connect is mapStateToProp, second argument mapStateToDispatch
export default connect(mapStateToProps, mapDispatchToProps)(PostList);
