import Post from "../models/Post.js";
import User from "../models/User.js";
import formatDateTime from "./formatDateTime.js";

/* CREATE NEW POST */
export const posts = async (req, res) => {
	// try {
	// 	// Destructuring the request body
	// 	const { id, postContent, file, user, postLocation, userEmail } = req.body;

	// 	// Extracting user data for User DB
	// 	const userRecord = await User.findOne({ firstName: user });
	// 	const userName = `${userRecord.firstName} ${userRecord.lastName}`;
	// 	const userTitle = userRecord.occupation;
	// 	const userPhotoURL = userRecord.picturePath;
	// 	const postTime = formatDateTime(new Date());

	// 	// Creating a new Post document
	// 	const newPost = new Post({ id, userName, userTitle, userPhotoURL, userEmail, postTime, postContent, file, postLocation, upvoteCount: 0});

	// 	// Saving the new Post document in Post DB
	// 	const savedPost = await newPost.save();
	// 	res.status(201).json(savedPost);
	// } catch (err) {
	// 	// console.error(err);
	// 	res.status(500).json({ error: err.message });
	// }

	try {
		// Destructuring the request body
		const { id, postContent, user, postLocation, userEmail } = req.body;

		const postImage = {
			data: req.file.buffer,
			contentType: req.file.mimetype
		};

		// Extracting user data for User DB
		const userRecord = await User.findOne({ firstName: user });
		const userName = `${userRecord.firstName} ${userRecord.lastName}`;
		const userTitle = userRecord.occupation;
		const userPhotoURL = userRecord.picturePath;
		const postTime = formatDateTime(new Date());

		// Creating a new Post document
		const newPost = new Post({ id, userName, userTitle, userPhotoURL, userEmail, postTime, postContent, file, postLocation, upvoteCount: 0, postImage });

		// Saving the new Post document in Post DB
		const savedPost = await newPost.save();
		res.status(201).json(savedPost);
	} catch (err) {
		// console.error(err);
		res.status(500).json({ error: err.message });
	}

}
