import express from "express";
import { addComment } from "../controllers/addComment.js";

const router = express.Router();

router.post("/add-comment/:postId", addComment);

export default router;