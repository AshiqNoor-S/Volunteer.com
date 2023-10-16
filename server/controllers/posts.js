// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
import Post from "../models/Post.js";
import User from "../models/User.js";
// import getTimeDifference from "./getTimeDifference.js";
import formatDateTime from "./formatDateTime.js";

/* CREATE POST */
export const posts = async (req, res) => {
	try {
		const { id, postContent, file, user, postLocation } = req.body;
		// console.log(JSON.stringify(req.body));
		// console.log(postContent);
		console.log(postLocation);

		const dateOptions = { year: 'numeric', month: 'long', day: 'numeric', };

		// Extract data for UsersDB
		const userRecord = await User.findOne({ firstName: user });
		const userName = `${userRecord.firstName} ${userRecord.lastName}`;
		const userTitle = userRecord.occupation;
		const userPhotoURL = userRecord.picturePath;
		const postTime = formatDateTime(new Date());
		// const postTime = getTimeDifference(userRecord.updatedAt);
		// const postTime = new Date(userRecord.updatedAt).toLocaleDateString(undefined, dateOptions);
		// console.log(postTime);


		// Create a new Post document
		const newPost = new Post({ id, userName, userTitle, userPhotoURL, postTime, postContent, file, postLocation,  });


		const savedPost = await newPost.save();
		// res.status(201).json({ message: 'Post created successfully...' });
		res.status(201).json(savedPost);
	} catch (err) {
		// console.error(err);
		// res.status(500).json({ error: 'Error creating the post...' });
		res.status(500).json({ error: err.message });
	}
}
