import express from "express";
import {
    employerGetAllApplications,
    jobSeekerDeleteApplication,
    jobseekerGetAllApplications,
} from "../controllers/applicationController.js";
import { isAuthorized } from "../middlewares/auth.js";


const router= express.Router();

router.get("");
router.get("");
router.delete("/delete/:id", isAuthorized, jobSeekerDeleteApplication);
export default router;