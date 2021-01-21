import mongoose from 'mongoose';
import dotenv from "dotenv";
import makePostsDb from "./posts/posts-db.js"
import makeUsersDb from "./users/users-db.js"
import postSchema from "./schema/post.js"
import userSchema from "./schema/user.js"

dotenv.config();

mongoose.connect(process.env.LOCAL_DATA_BASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});
mongoose.set("useCreateIndex", true);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => { console.log("Connected to the DB"); });

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