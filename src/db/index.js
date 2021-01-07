import mongoose from 'mongoose';
import makePostsDb from "./posts-db.js"
import makeUsersDb from "./users-db.js"

mongoose.connect("mongodb://localhost:27017/postsDb", { useNewUrlParser: true, useUnifiedTopology: true });

const postSchema = new mongoose.Schema({
    // add user_id
    _id: String,
    author: String,
    title: String,
    content: String,
    createdAt: String,
    updatedAt: String,
    published: Boolean,
});


const userSchema = new mongoose.Schema({
    _id: String,
    userName: String,
    firstName: String,
    lastName: String,
    email: String

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