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

export default userSchema;