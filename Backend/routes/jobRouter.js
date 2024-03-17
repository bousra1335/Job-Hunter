import express from "express";
import {
    getAllJobs,
    getmyJobs,
    getSingleJob,
    postJob,
    updateJob,
    deleteJob,
}   from "../controllers/jobController.js";

import {isAuthorized} from '../middlewares/auth.js';
import { get } from "mongoose";

const router= express.Router();

router.get("/getall",getAllJobs);
router.post("/post", isAuthorized, postJob);
router.get("/getmyjobs", isAuthorized, getmyJobs);
router.put("/update/:id", isAuthorized, updateJob);
router.delete("/delete/:id", isAuthorized, deleteJob);

export default router;