import mongoose from 'mongoose';
import dotenv from "dotenv";
import makePostsDb from "./posts/posts-db.js"
import makeUsersDb from "./users/users-db.js"

dotenv.config();

mongoose.connect(process.env.LOCAL_DATA_BASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => { console.log("Connected to the DB"); });

const postSchema = new mongoose.Schema({
    _id: String,
    author_id: String,
    title: String,
    content: String,
    createdAt: Date,
    updatedAt: Date,
    published: Boolean,
}, { _id: false });


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