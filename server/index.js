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

/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);  /*These both configs are used because we set the type as module in package.json*/
const __dirname = path.dirname(__filename);
dotenv.config();


const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, '/public/assets')));

/* FILE STORAGE */
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/assets");
    }
    , filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage });



/* ROUTES WITH FILES*/
app.post("/auth/register", upload.single("picture"), register);

app.post('/create-post', upload.single('file'), posts);

app.get('/posts', async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
});

/* ROUTES */
app.use("/auth", authRoutes);
app.use("/posts",postRoute);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 6001;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`Server port : ${PORT}`));
}).catch((error) => console.log(`${error} did not connect`));