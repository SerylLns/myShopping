import { SHOW_ARTICLE } from "../actions/showArticle.action";

const initialState = {};

export default function showArticleReducer (state = initialState, action) {
  switch (action.type) {
    case SHOW_ARTICLE:
      return action.payload
  
    default:
      return state
  }
}