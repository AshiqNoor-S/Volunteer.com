import User from "../models/User.js";

/* GET USER PROFILE */
export const getUserProfile = async (req, res) => {
    try {
        // Fetch the user profile data from the "User" collection
        const user = await User.findOne({ username: 'john_doe' }); // Replace with your user identification logic

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching user profile' });
    }
}
