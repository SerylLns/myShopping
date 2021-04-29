import axios from "axios";

export const GET_ARTICLES = "GET_ARTICLES";
export const GET_ALL_ARTICLES = "GET_ALL_ARTICLES";
export const ADD_COMMENT = "ADD_COMMENT";

export const getArticles = (number) => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/articles`)
      .then((res) => {
        const array = res.data.slice(0, number);
        dispatch({ type: GET_ARTICLES, payload: array });
        dispatch({ type: GET_ALL_ARTICLES, payload: res.data });
      });
  };
};

export const addComment = (articleId, commenterId, text, pseudo, rate) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}api/articles/comment-article/${articleId}`,
      data: {
        text,
        rate,
        commenterId,
        pseudo,
      },
    })
      .then((res) =>
        dispatch({
          type: ADD_COMMENT,
          payload: { comments: res.data.comments, articleId: articleId },
        })
      )
      .catch((err) => console.log(err));
  };
};
