export const ADD_ARTICLE = "ADD_ARTICLE";
export const DELETE_ARTICLE = "DELETE_ARTICLE";

export const addArticle = (article) => {
  return (dispatch) => {
    dispatch({ type: ADD_ARTICLE, payload: article });
  };
};

export const deleteArticle = (articleId) => {
  return (dispatch) => {
    dispatch({ type: DELETE_ARTICLE, payload: {articleId} });
  };
};