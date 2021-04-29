import axios from "axios";


export const SHOW_ARTICLE = "SHOW_ARTICLE";

export const showArticle = (article) => {
  return (dispatch) => {
   return dispatch({type: SHOW_ARTICLE, payload: article})
 }
}