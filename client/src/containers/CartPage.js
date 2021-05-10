import { Button } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { cartTotal, isEmpty } from "../utils/utils";

const CartPage = () => {
  const { articles } = useSelector((state) => state.cartReducer);
  return (
    <div className="cart-page-container">
      <div className="cart-page">
        <h1>Mon Panier</h1>
        {isEmpty(articles) ? (
          <h3
            style={{
              color: "#f9a03f",
              fontSize: "2em",
              textAlign: "center",
              margin: "30px",
            }}
          >
            Votre panier est vide !
          </h3>
        ) : (
          <>
            {articles.map((article) => {
              return (
                <div className="cart-page-item">
                  <div className="cart-page-right-part">
                    <img src={article.pictureUrl} alt="img article" />
                    <h4>{article.title}</h4>
                  </div>
                  <p>{article.price}€</p>
                </div>
              );
            })}
            <div className="cart-page-footer">
              <NavLink exact to="/payment">
                <Button variant="contained" size="large" color="secondary">
                  Valider mon panier
                </Button>
              </NavLink>
              <h4>Total: {cartTotal(articles)}€ </h4>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
