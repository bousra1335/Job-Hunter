import express from "express";
import {
    getAllJobs,
    getMyJobs,
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
router.get("/getMyJobs", isAuthorized, getMyJobs);
router.put("/update/:id", isAuthorized, updateJob);
router.delete("/delete/:id", isAuthorized, deleteJob);
router.get("/:id", isAuthorized, getSingleJob);

export default router;