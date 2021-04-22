import { GET_ARTICLES } from "../actions/articles.action";

const initialState = {}

export default function articlesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ARTICLES:
      return action.payload;
  
    default:
      return state;
  }
}