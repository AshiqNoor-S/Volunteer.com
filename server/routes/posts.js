import express from "express";
import { posts } from "../controllers/posts.js";

const router = express.Router();

router.post("/create-post", posts);

export default router;