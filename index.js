import express from "express";
import session from "express-session";
import cors from "cors";
import morgan from "morgan";
import postsRouter from "./src/routes/posts-routes.js";
import usersRouter from "./src/routes/users-routes.js";
import authenticationRouter from "./src/routes/authentication-routes.js";
import MongoStore from "connect-mongo";
import isAuthenticated from "./src/auth/middleware/isAuthenticated.js";
import isAdmin from "./src/auth/middleware/isAdmin.js";
import { connection } from "./src/db/index.js";

import passport from "./src/auth/config/passport.js";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(
  cors({
    origin: "http://localhost:8080",
    credentials: true,
  })
);
const mongoStore = MongoStore(session);
const sessionStore = new mongoStore({
  mongooseConnection: connection,
  collection: "sessions",
});

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/users", isAdmin, usersRouter);
app.use("/posts", isAuthenticated, postsRouter);
app.use("/auth", authenticationRouter);

app.listen(PORT, () => {
  console.log(`Server started listening on port ${PORT}`);
});
