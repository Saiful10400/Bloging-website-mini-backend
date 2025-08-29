import mongoose from "mongoose";
import Tpost from "./post.interface";
// Define the Post schema
const postSchema = new mongoose.Schema<Tpost>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      unique: true,
    },
    author: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
      unique: true,
    },
    tags: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

// Create the Post model
const postModel = mongoose.model("Post", postSchema);

export default postModel;
