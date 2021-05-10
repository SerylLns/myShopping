import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartTotal, isEmpty } from "../../utils/utils";
import Button from "@material-ui/core/Button";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { deleteArticle } from "../../actions/cart.action";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const { articles } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteArticle(id));
  }
  return (
    <div className="cart-container">
      <h2>Panier</h2>
      {isEmpty(articles) ? (
        <h4>Votre panier est vide </h4>    
      ): (
        
        articles.map((article) => {
          return (
            <div className="cart-item">
              <div className="cart-right-part">
                <img src={article.pictureUrl} alt="img article" />
                <h4>{article.title}</h4>
              </div>
              <p>{article.price}€</p>
              <DeleteForeverIcon onClick={() => handleDelete(article._id)} color="secondary" />
            </div>
          );
        })
      )
      }
      <div className="cart-footer">
        <h4>Total: {cartTotal(articles)}€ </h4>
        <NavLink exact to="/cart">
          <Button variant="contained" color="secondary">Voir le panier</Button>
        </NavLink>
      </div>
    </div>
  );
};

export default Cart;
