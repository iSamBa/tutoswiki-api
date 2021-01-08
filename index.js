import postsService from "./src/use-cases/post/index.js";
import usersService from "./src/use-cases/user/index.js";

const user = await usersService.addUser({
    userName: "SuperMan",
    firstName: "Super",
    lastName: "Man",
    email: "super.man@123.com"
})

await postsService.addPost({
    author_id: user._id,
    title: "Post titleeeee",
    content: " POST CONTENNNNTTTTTT ",
})


