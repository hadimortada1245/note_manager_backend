const mongoose = require("mongoose");

const notes = new mongoose.Schema({
  title: {type: String, required:true},
  content:{type:String , required:true},
},{ timestamps: true });

const Review = mongoose.model("notes", notes);
module.exports = Review;