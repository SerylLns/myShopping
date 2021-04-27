import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import ArticleComment from "../Components/Article/ArticleComment";
import { isEmpty } from "../utils/utils";

const ShowArticle = ({ match }) => {
  console.log(match.params.id);
  const [article, setArticle] = useState({});
  const UsersData = useSelector((state) => state.usersReducer);

  useState(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}api/articles/${match.params.id}`)
      .then((res) => {
        setArticle(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {!isEmpty(article) && (
        <div className="show-container">
          <div className="left-part-show">
            <img src={article.pictureUrl} alt="" />
            <h2> {article.title}</h2>
            <h4 className="price-article">{article.price} €</h4>
            <div className="show-card-content">
              <p>{article.description}</p>
            </div>
            <div className="show-card-footer">
              <small>{article.createdAt}</small>
              {UsersData.map((user) => {
                if (user._id === article.posterId) {
                  return <p key={user._id}>{user.pseudo}</p>;
                } else {
                  return null;
                }
              })}
            </div>
            <div className="show-comments">
              <h3>Commentaires </h3>
              {!isEmpty(article.comments[0]) && (
                  article.comments.map((comment) => {
                    return <ArticleComment comment={comment} />
                  })
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShowArticle;
