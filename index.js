import express from "express";
import postsRouter from "./src/routes/posts-routes.js"
import usersRouter from "./src/routes/users-routes.js"


const PORT = process.env.PORT || 3000;

const app = express();

app.use('/users', usersRouter)
app.use('/posts', postsRouter)


app.listen(PORT, () => {
    console.log(`Server started listening on port ${PORT}`);
});

