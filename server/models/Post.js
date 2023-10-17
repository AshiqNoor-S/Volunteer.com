import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
	commentID: Number,
	commentUserName: String,
	commentUserTitle: String,
	commentUserPhotoURL: {
		type: String,
		default: "",
	},
	commentTime: String,
	commentContent: String,
});

const postSchema = new mongoose.Schema({
	id: {
		type: String, 
		required: true,
	},
	userName: String,
	userTitle: String,
	userPhotoURL: {
		type: String,
		default: "",
	},
	postTime: String,
	postContent: {
		type: String, 
		required:true,
	}, 
	file: String, 
	postLocation: String,
	postComments: [commentSchema]
},
	{ timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;