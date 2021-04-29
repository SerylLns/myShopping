import { ADD_COMMENT, GET_ALL_ARTICLES, GET_ARTICLES } from "../actions/articles.action";

const initialState = {}

export default function articlesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ARTICLES:
      return action.payload;
    case GET_ALL_ARTICLES:
      return action.payload;
    case ADD_COMMENT:
      return state.map((article) => {
        if (article._id === action.payload.articleId) {          
          return {
            ...article,
            comments: action.payload.comments,
          }
        }
        return article;
      })
    default:
      return state;
  }
}