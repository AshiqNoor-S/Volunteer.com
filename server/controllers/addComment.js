import Post from "../models/Post.js";

/* ADD COMMENT TO A POST */
export const addComment = async (req, res) => {
    const { postId } = req.params;
    const {
        commentContent,
        commentUserName,
        commentUserTitle,
        commentUserPhotoURL,
        commentTime,
    } = req.body;

    try {
        const post = await Post.findById(postId);
		// console.log('Found Post');

        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        const newComment = {
            commentContent,
            commentUserName,
            commentUserTitle,
            commentUserPhotoURL,
            commentTime,
        };

        post.postComments.push(newComment);

		// console.log('Added comment to the post!');

        await post.save();

        res.status(201).json(newComment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error adding the comment' });
    }
}
