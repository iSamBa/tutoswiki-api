import postsService from "./src/use-cases/post/index.js";
import usersService from "./src/use-cases/user/index.js";

// const user = await usersService.addUser({
//     userName: "SuperMan",
//     firstName: "Super",
//     lastName: "MaAAAAAn",
//     email: "super.man@123.com"
// })

// await postsService.addPost({
//     author_id: "ea2a8b81-1c64-4a81-91f0-5217a299cdd7",
//     title: "Post titleeeee",
//     content: " POST CONTENNNNTTTTTT ",
// })


// await postsService.updatePost({
//     id: "48149b9d-db06-4c96-b8a6-71bfcbe2615f",
//     title: "Tiltle --UPDATED--"
// })

await usersService.updateUser({
    id: "3b4820dd-4233-426e-bb25-5d6c81918ab2",
    firstName: "HelloThere2"
})