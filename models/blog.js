const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const blogSchema = new Schema({
    name: String,
    imageURL: String,
    description: String
});

const Blog = mongoose.model('data' , blogSchema);

module.exports = Blog;