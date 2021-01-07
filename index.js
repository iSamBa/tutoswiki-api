import postsService from "./src/use-cases/index.js";

// const addedPost = await postsService.addPost({
//     author: "reda",
//     title: "This is a title",
//     content: "This is a content so be happy to have one OK ?!"
// })

// const posts = await postsService.listPosts({ publishedOnly: true });
// console.log(posts);

// await postsService.getPostById("c217bda8-2bef-413a-9480-ce2606d4df84").then(post => {
//     console.log(post);
// }
// );
// // postsService.deletePost(post.id).then(res => {
// //     console.log(res);
// // }).catch(err => console.log(err))

const user = await postsService.addUser({
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


