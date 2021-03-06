import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from '../actions/session_actions';

const null_id = Object.freeze({ id:null });

const sessionReducer = (state = null_id, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return { id: action.currentUser.id };
    case LOGOUT_CURRENT_USER:
      return null_id;
    default:
      return state;
  }
};
export default sessionReducer;
