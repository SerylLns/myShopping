import { GET_ALL_USERS, GET_USER } from "../actions/users.action";

const initialState = {}

export default function usersReducer(state = initialState, action){
  switch (action.type) {
    
    case GET_ALL_USERS:
      return action.payload;
    
    case GET_USER:
      return action.payload;
    
    default:
      return state;
  }
}