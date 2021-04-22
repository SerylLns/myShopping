const express = require('express');
const app = express();
require('dotenv').config({ path: "./.env" });
const cookieParser = require("cookie-parser");
// const bodyParser = require('body-parser');
require("./db");
const { checkUser, requireAuth } = require("./middleware/auth.middleware");
const UserRoutes = require('./route/user.routes');
const ArticlesRoutes = require("./route/articles.route");
const cors = require("cors");


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
app.use(cors());


// ROUTES
app.get("*", checkUser);
app.get("/jwtid", requireAuth, (req, res) => {
  console.log("get token");
  res.status(200).send(res.locals.user.id);
});

app.use("/api/user", UserRoutes);
app.use("/api/articles", ArticlesRoutes);


app.listen(process.env.PORT, () => console.log(`app listen on port : ${process.env.PORT}`))