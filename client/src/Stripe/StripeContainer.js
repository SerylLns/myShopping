import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";
import { useSelector } from "react-redux";
import { cartTotal } from "../utils/utils";

const PUBLIC_KEY =
  "pk_test_51ImhnHFidttJ0AsXutTiv1i6oACF0KK0IBOYW7lBYJ9PnmZ5HJamfA6Q2sz5he5Fhwl2pVLYevAHmIqsZt6SArRI00WDx73tfd";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  const { articles } = useSelector((state) => state.cartReducer);
  const amount = cartTotal(articles) * 100
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm amount={amount} />
    </Elements>
  );
};

export default Stripe;
