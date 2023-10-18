import Post from "../models/Post.js";

export const getpostlocation = async (req, res) => {
    try {
      const postLocations = await Post.find({}, 'userName userEmail'); // Fetch only the 'postLocation' field
      res.status(200).json(postLocations); // Send the extracted post locations as a JSON response
    } catch (error) {
      console.error('Error fetching post locations:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
};
