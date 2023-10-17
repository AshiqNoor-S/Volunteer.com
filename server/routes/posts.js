import express from "express";
import { posts } from "../controllers/posts.js";
import { getpostlocation } from "../controllers/getpostlocation.js";

const router = express.Router();

router.get("/getlocation",getpostlocation);


export default router;