import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showArticle } from "../actions/showArticle.action";
import AddComment from "../Components/Article/AddComment";
import ArticleComment from "../Components/Article/ArticleComment";
import { UidContext } from "../UserContext";
import { isEmpty } from "../utils/utils";

const ShowArticle = ({ match }) => {
  const [article, setArticle] = useState({});
  const Articles = useSelector((state) => state.articlesReducer);
  const UsersData = useSelector((state) => state.usersReducer);
  const uid = useContext(UidContext);
  const dispatch = useDispatch();
  const [isLoading, setisLoading] = useState(true);
  
  const getArticle = async (id) => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}api/articles/${id}`)
      .then((res) => {
        setArticle(res.data);
        dispatch(showArticle(res.data));
        setisLoading(false);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getArticle(match.params.id);
  }, []);

  // useState(() => {
  //   console.log('articles:' + Articles[0]);
  //   if (!isEmpty(Articles)) {
  //     Articles.forEach(article => {
  //       if (article._id === match.params.id) {
  //         setArticle(article);
  //         setisLoading(false);
  //       }
  //     });
  //   }
  // }, [Articles]);

  return (
    <>
      {isLoading ? (
        <h1>Loading.......</h1>
      ) : (
        <div className="show-container">
          <div className="left-part-show">
            <div className="show-card-content">
              <img src={article.pictureUrl} alt="" />
              <h2> {article.title}</h2>
              <h4 className="price-article">{article.price} €</h4>
              <p>{article.description}</p>
              <div className="show-card-footer">
                <p> Créer le: {article.createdAt}</p>
                {UsersData.map((user) => {
                  if (user._id === article.posterId) {
                    return <p key={user._id}> Vendeur: {user.pseudo}</p>;
                  } else {
                    return null;
                  }
                })}
              </div>
            </div>
            <div className="show-comments">
              <h3>Commentaires </h3>
              {!isEmpty(article.comments) &&
                article.comments.map((comment) => {
                  return <ArticleComment comment={comment} />;
                })}
              {uid && <AddComment getArticle={getArticle} article={article} />}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShowArticle;
