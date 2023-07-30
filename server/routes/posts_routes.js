import express from "express";
import {
  createPost,
  getAllPosts,
  getPost,
} from "../controllers/posts_controllers.js";

const posts_router = express.Router();

posts_router.get("/", getAllPosts);
posts_router.get("/:post_id", getPost);
posts_router.post("/new", createPost);

export default posts_router;
