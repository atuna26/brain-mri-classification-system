import express from "express";
import bodyParser from "body-parser"
import mongoose, { Mongoose } from "mongoose";
import cors from "cors";
import dotenv from "dotenv"
import multer from "multer"
import helmet from "helmet"
import morgan from "morgan"
import path from "path"
import { fileURLToPath } from "url";
import {register} from "./controllers/auth.js"
import { uploadBrainMRI } from "./controllers/brainMRIs.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config()
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

/* FILE STORAGE */
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/assets");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const upload = multer({storage: storage});

app.post("/auth/register", register)
app.post("/uploadBrainMRI/:id", upload.array("files", 10), uploadBrainMRI);


/* MONGOOSE */
const PORT = process.env.PORT || 6001
mongoose.connect(process.env.MONGO_URL).then(()=>{
    app.listen(PORT,()=>console.log(`Server Port ${PORT}`))
}).catch(err=>console.error(`${err} did not connect`))