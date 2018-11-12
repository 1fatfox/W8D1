import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';

const msp = (state, ownProps) => ({
  errors: state.errors,
  formType: 'signup',
  navLink: <Link to="/login">login</Link>,
});

const mdp = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(signup(user)),
});

export default connect(msp, mdp)(SessionForm);

// From mapStateToProps(state, ownProps):
// errors (array) - list of errors from the state
// formType (string): 'login' or 'signup', for each respective container
// From mapDispatchToProps(dispatch, ownProps):
// processForm (function): dispatching action creators
// login or signup, again depending on the container
