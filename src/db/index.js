import mongoose from 'mongoose';
import dotenv from 'dotenv';
import makePostsDb from './posts/posts-db.js';
import makeUsersDb from './users/users-db.js';
import postModel from './models/post.js';
import userModel from './models/user.js';

dotenv.config();

mongoose.connect(process.env.DATA_BASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});
mongoose.set("useCreateIndex", true);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => { console.log("Connected to the DB"); });

const postsDb = makePostsDb({ postModel });
const usersDb = makeUsersDb({ userModel })

const dbService = Object.freeze({
    postsDb,
    usersDb
})

export { postsDb, usersDb };
export default dbService;