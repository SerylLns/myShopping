import axios from "axios";

export const GET_ARTICLES = "GET_ARTICLES";



export const getArticles = (number) => {
  return (dispatch) => {
    return axios.get(`${process.env.REACT_APP_API_URL}api/articles`)
      .then((res) => {
        const array = res.data.slice(0, number);
        dispatch({type: GET_ARTICLES, payload: array})
    })
  }
}