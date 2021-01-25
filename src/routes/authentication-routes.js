import express from "express";
import bodyParser from "body-parser";
import makeExpressCallback from "../helpers/express-callback.js";
import registerUserController from "../controllers/auth/index.js";
import passport from "../auth/passport.js";

const authenticationRouter = express.Router();

authenticationRouter.use(bodyParser.urlencoded({ extended: true }));
authenticationRouter.use(bodyParser.json());

authenticationRouter.post(
  "/register",
  makeExpressCallback(registerUserController)
);
authenticationRouter.post(
  "/login",
  passport.authenticate("local"),
  (req, res) => {
    res.send("You have been successfully logged in !");
  }
);

authenticationRouter.get("/", (req, res) => {
  res.send("You are authenticated");
});

authenticationRouter.get("/failure", (req, res) => {
  res.send("You are NOT authenticated");
});

export default authenticationRouter;
