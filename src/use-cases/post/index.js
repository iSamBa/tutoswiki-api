import makeAddPost from "./add-post.js"
import makeDeletePost from "./delete-post.js"
import makeListPosts from "./list-posts.js"
import makeGetPost from "./get-post.js"
import makeUpdatePost from "./update-post.js"
import { postsDb } from "../../db/index.js"

const addPost = makeAddPost({ postsDb })
const deletePost = makeDeletePost({ postsDb })
const listPosts = makeListPosts({ postsDb })
const getPost = makeGetPost({ postsDb })
const updatePost = makeUpdatePost({ postsDb })

const postsService = Object.freeze({
    addPost,
    deletePost,
    getPost,
    listPosts,
    updatePost
});

export default postsService;
export { addPost, listPosts, getPost, deletePost, updatePost }
