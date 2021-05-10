const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config({ path: "./config/.env" });
const cookieParser = require("cookie-parser");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

require("./db");
const { checkUser, requireAuth } = require("./middleware/auth.middleware");
const UserRoutes = require('./route/user.routes');
const ArticlesRoutes = require("./route/articles.route");
const cors = require("cors");

const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  allowedHeaders: ["sessionId", "Content-Type"],
  exposedHeaders: ["sessionId"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};

app.use(cors(corsOptions));
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// CORS
// const corsOptions = {
//   origin: process.env.CLIENT_URL,
//   credentials: true,
//   allowedHeaders: ["sessionId", "Content-Type"],
//   exposedHeaders: ["sessionId"],
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   preflightContinue: false,
// };


// ROUTES
app.get("*", checkUser);
app.get("/jwtid", requireAuth, (req, res) => {
  console.log("get token");
  res.status(200).send(res.locals.user.id);
});

app.use("/api/user", UserRoutes);
app.use("/api/articles", ArticlesRoutes);

app.use(express.static("client/build"));

app.get("/*", (_, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

// STRIPE
app.post("/stripe/charge", cors(), async (req, res) => {
  console.log("stripe-routes.js 9 | route reached", req.body);
  let { amount, id } = req.body;
  console.log("stripe-routes.js 10 | amount and id", amount, id);
  try {
    const payment = await stripe.paymentIntents.create({
      amount: amount,
      currency: "USD",
      description: "Ecommerce paid",
      payment_method: id,
      confirm: true,
    });
    console.log("stripe-routes.js 19 | payment", payment);
    res.json({
      message: "Payement effectuer avec succés",
      success: true,
    });
  } catch (error) {
    console.log("stripe-routes.js 17 | error", error);
    res.json({
      message: "Une erreur de payement s'est produite",
      success: false,
    });
  }
});

app.listen(process.env.PORT, () => console.log(`app listen on port : ${process.env.PORT}`))