const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Creating schema
const blogSchema = new Schema({
    title: String,
    body: String,
    image: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });

//Creating model from schema 
const BlogModel = mongoose.model("Blog",blogSchema);

module.exports=BlogModel;