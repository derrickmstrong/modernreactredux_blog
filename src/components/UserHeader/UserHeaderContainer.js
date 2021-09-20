import { connect } from 'react-redux';
import { fetchUser } from '../../store/actions';

import UserHeader from './UserHeader';

// ownProps allows me to reference the userId prop that will be sent to the UserHeader component
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find(user => user.id === ownProps.userId),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: id => dispatch(fetchUser(id)),
  };
};

// First argument to connect is mapStateToProp, second argument mapStateToDispatch
export default connect(mapStateToProps, mapDispatchToProps)(UserHeader);
