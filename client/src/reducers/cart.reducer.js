import { ADD_ARTICLE, DELETE_ARTICLE } from "../actions/cart.action";

const initialState = {  articles: [] };


export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ARTICLE:
      const newArr = [...state.articles];
      newArr.unshift(action.payload);
      return {
        ...state,
        articles: newArr
      }
      
    case DELETE_ARTICLE:
      return {
        ...state,
        articles: state.articles.filter((article) => article._id !== action.payload.articleId) 
      }
      
    default:
      return state
  }
} 