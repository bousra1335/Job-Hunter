import express from "express";
import {
    getAllJobs,
    postJob,
}   from "../controllers/jobController.js";

import {isAuthorized} from '../middlewares/auth.js';
import { get } from "mongoose";

const router= express.Router();

router.get("/getall",getAllJobs);
router.post("/post", isAuthorized, postJob);

export default router;