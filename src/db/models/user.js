import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    _id: String,
    userName: String,
    firstName: String,
    lastName: String,
    email: String,
    password:String,
    createdAt: Date,
    updatedAt: Date

})
const userModel = mongoose.model("user", userSchema);

export default userModel;

