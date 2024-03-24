import express from "express";
import {
    employerGetAllApplications,
    jobSeekerDeleteApplication,
    jobseekerGetAllApplications,
    postApplication,
} from "../controllers/applicationController.js";
import { isAuthorized } from "../middlewares/auth.js";


const router= express.Router();

router.post("/post", isAuthorized, postApplication);
router.get("/jobseeker/getall",isAuthorized, jobseekerGetAllApplications);
router.get("/employer/getall",isAuthorized, employerGetAllApplications);
router.delete("/delete/:id", isAuthorized, jobSeekerDeleteApplication);


export default router;