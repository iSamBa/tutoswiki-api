import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    _id: String,
    author_id: String,
    title: String,
    content: String,
    createdAt: Date,
    updatedAt: Date,
    published: Boolean,
});

export default postSchema;