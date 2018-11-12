import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

const msp = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};
const mdp = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(msp, mdp)(Greeting);





//
// GreetingContainer passes as props to the presentational component currentUser
// from the state and the logout action creator. In order to get the current
// user's information from our state, we will need to use state.session.id to
// get the id of the current user and then use this id to get the information
// from state.entities.users. It should look something like
// state.entities.users[state.session.id]. You can use object de-structuring
// in your mapStateToProps function to make this look a bit cleaner. Set up
// mapStateToProps and mapDispatchToProps accordingly.
