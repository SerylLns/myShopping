import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { Button } from "@material-ui/core";

export const CheckoutForm = ({amount}) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log("Stripe 23 | token generated!", paymentMethod);
      //send token to backend here
      window.location = "/";
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}stripe/charge`,
          {
            amount: amount, // $ = Cents 
            id: id,
          }
        );

        console.log("Stripe 35 | data", response.data.success);
        if (response.data.success) {
          console.log("CheckoutForm.js 25 | payment successful!");
        }
      } catch (error) {
        console.log("CheckoutForm.js 28 | ", error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <form className="stripe-form" onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
      <CardElement />
      <Button variant="contained" color="primary" >Payer</Button>
    </form>
  );
};

