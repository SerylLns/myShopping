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

// export const processPayment = async (order) => {
//   const stripePromise = Stripe("pk_test_51ImhnHFidttJ0AsXutTiv1i6oACF0KK0IBOYW7lBYJ9PnmZ5HJamfA6Q2sz5he5Fhwl2pVLYevAHmIqsZt6SArRI00WDx73tfd");
//   const stripe = await stripePromise;
//   axios.post('api/create-checkout-session', order)
//     .then((res) => {
//       console.log(res);
//       // return stripe.redirectToCheckout({sessionId: res.id})
//     })
//     .catch((err) => console.log(err));
// }