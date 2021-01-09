import express from "express";
import bodyParser from "body-parser";

import postsController from "./src/controllers/post/index.js"
import usersController from "./src/controllers/user/index.js"

import makeExpressCallback from "./src/helpers/express-callback.js"


const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const { addPostController, deletePostController, updatePostController, listPostsController, getPostController } = postsController;
const { addUserController, deleteUserController, updateUserController, listUsersController, getUserController } = usersController;

app.get("/posts", makeExpressCallback(listPostsController))
app.get("/posts/:id", makeExpressCallback(getPostController))
app.post("/posts", makeExpressCallback(addPostController));
app.delete("/posts/:id", makeExpressCallback(deletePostController))
app.patch("/posts/:id", makeExpressCallback(updatePostController))

app.get("/users", makeExpressCallback(listUsersController))
app.get("/users/:id", makeExpressCallback(getUserController))
app.post("/users", makeExpressCallback(addUserController));
app.delete("/users/:id", makeExpressCallback(deleteUserController))
app.patch("/users/:id", makeExpressCallback(updateUserController))

app.listen(PORT, () => {
    console.log(`Server started listening on port ${PORT}`);
});

