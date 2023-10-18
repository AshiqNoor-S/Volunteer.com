import Post from "../models/Post.js";

/* GET USER POSTS */
const getUserPosts = async (req, res) => {
    const posts = await Post.find({userEmail: req.body.email});
    res.json(posts);
}

export default getUserPosts;