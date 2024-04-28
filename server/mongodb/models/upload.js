import mongoose from 'mongoose';

const Upload = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  img: { type: String, required: true },
  name: { type: String, required: true },
  dp: { type: String, required: true },
});


// This has two properties 'users' is the collection name and Post is the schema we created
const UploadSchema = mongoose.model('posts', Upload); 

export default UploadSchema;