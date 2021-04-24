import { combineReducers } from 'redux';
import articlesReducer from "./articles.reducer";
import usersReducer from './users.reducer';

export default combineReducers({
  articlesReducer,
  usersReducer,
})