import { GET_USER } from "../actions/user.action";

const initialState = {};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload;

    default:
      return state;
  }
}
