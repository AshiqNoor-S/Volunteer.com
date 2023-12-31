import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import helmet from 'helmet';
import path from "path";
import { fileURLToPath } from 'url';
import multer from 'multer';
import authRoutes from "./routes/auth.js";
import { register } from "./controllers/auth.js";
import { verifyToken } from './middleware/auth.js';
import postRoute from './routes/posts.js';


import Post from './models/Post.js';
import { posts } from "./controllers/posts.js";


import getUserPosts from './controllers/getUserPosts.js';
import { getUserProfile } from './controllers/getUserProfile.js';
import { addComment } from './controllers/addComment.js';

import fileUpload from 'express-fileupload';
// const fileUpload = require('express-fileupload');

/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);  /*These both configs are used because we set the type as module in package.json*/
const __dirname = path.dirname(__filename);
dotenv.config();


const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

// app.use(
//     helmet.contentSecurityPolicy({
//         directives: {
//             "default-src": ["'self'", "https://volunteer-phi.vercel.app"],
//             "script-src": ["'self'", "https://volunteer-phi.vercel.app"],
//             // Add other necessary permissions for your backend domain
//         }
//     })
// );

app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
const corsOptions = {
    origin: 'https://volunteer-phi.vercel.app',
    // origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
// app.use(express.static('public'));
app.use("/assets", express.static(path.join(__dirname, '/public/assets')));

app.use(fileUpload({
    limits: { fileSize: 1222013 * 1024 * 1024 }, // 1222013MB, adjust this value based on your requirements
}));

/* FILE STORAGE */
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/assets");
    }
    , filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const storagePostImg = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/assets");
    }
    , filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage });

// const uploadPostPic = multer({ storage: storagePostImg });

/* ROUTES WITH FILES*/
app.post("/auth/register", upload.single("picture"), register);

// app.post('/create-post', uploadPostPic.single('file'), posts);

app.post('/create-post', verifyToken, posts);

/* ROUTES */
app.use("/auth", authRoutes);
app.use("/posts", postRoute);

app.get('/api/posts', async (req, res) => {
    try {
        await Post.find({}).then(data => res.send({ status: 'good', data: data }));
    } catch (error) {

    }

    // res.json(posts);
});

app.post('/api/get-user-posts', getUserPosts);

app.get('/get-user-profile', getUserProfile);

app.post('/add-comment/:postId', verifyToken, addComment);

app.post('/upvote/:postId', async (req, res) => {
    const { postId } = req.params;

    try {
        const post = await Post.findById(postId);

        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }
        post.upvoteCount += 1;
        await post.save();
        res.status(200).json({ upvoteCount: post.upvoteCount });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error upvoting the post' });
    }
});


/* MONGOOSE SETUP */
const PORT = process.env.PORT || 6001;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`Server port : ${PORT}`));
}).catch((error) => console.log(`${error} did not connect`));
