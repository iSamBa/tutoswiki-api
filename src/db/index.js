import mongoose from "mongoose";
import dotenv from "dotenv";
import makePostsDb from "./posts/posts-db.js";
import makeUsersDb from "./users/users-db.js";

dotenv.config();

const connection = mongoose.createConnection(process.env.DATA_BASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
mongoose.set("useCreateIndex", true);

const postSchema = new mongoose.Schema({
  _id: String,
  author_id: String,
  title: String,
  content: String,
  createdAt: Date,
  updatedAt: Date,
  published: Boolean,
});
const postModel = connection.model("post", postSchema);

const userSchema = new mongoose.Schema({
  _id: String,
  userName: String,
  firstName: String,
  lastName: String,
  email: String,
  createdAt: Date,
  updatedAt: Date,
  hash: String,
  salt: String,
});

const userModel = connection.model("user", userSchema);

const postsDb = makePostsDb({ postModel });
const usersDb = makeUsersDb({ userModel });

const dbService = Object.freeze({
  connection,
  userModel,
  postModel,
  postsDb,
  usersDb,
});

export { connection, postsDb, usersDb, userModel, postModel };
export default dbService;
