import mongoose from 'mongoose';
import makePostsDb from "./posts/posts-db.js"
import makeUsersDb from "./users/users-db.js"

mongoose.connect("mongodb://localhost:27017/postsDb", { useNewUrlParser: true, useUnifiedTopology: true });

const postSchema = new mongoose.Schema({
    // add user_id
    _id: String,
    author_id: String,
    title: String,
    content: String,
    createdAt: Date,
    updatedAt: Date,
    published: Boolean,
});


const userSchema = new mongoose.Schema({
    _id: String,
    userName: String,
    firstName: String,
    lastName: String,
    email: String,
    createdAt: Date,
    updatedAt: Date

})

const postModel = mongoose.model("post", postSchema);
const userModel = mongoose.model("user", userSchema);

const postsDb = makePostsDb({ postModel });
const usersDb = makeUsersDb({ userModel })

const dbService = Object.freeze({
    postsDb,
    usersDb
})

export { postsDb, usersDb };
export default dbService;