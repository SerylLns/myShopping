import { combineReducers } from 'redux';
import articlesReducer from "./articles.reducer";
import usersReducer from "./users.reducer";
import userReducer from "./user.reducer";

export default combineReducers({
  articlesReducer,
  usersReducer,
  userReducer
})