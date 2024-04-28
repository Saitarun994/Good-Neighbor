import mongoose from 'mongoose';

const Post = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  score: { type: Number, required: true },
});


// This has two properties 'users' is the collection name and Post is the schema we created
const PostSchema = mongoose.model('users', Post); 

export default PostSchema;