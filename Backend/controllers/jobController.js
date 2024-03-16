import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { Job } from "../models/jobSchema.js";
import ErrorHandler from "../middlewares/error.js";

export const getAllJobs = catchAsyncError(async (req, res, next) => {
  const jobs = await Job.find({ expired: false });
  res.status(200).json({
    success: true,
    jobs,
  });
});

export const postJob = catchAsyncError(async (req, res, next) => {
  const {role} = req.user;
  if (role === "Job Seeker"){
    return next(
      new ErrorHandler(
        "Job Seeker not allowed to access this resources!",
        400
      )
    );
  }
  const {
    title,
    description,
    category,
    country,
    city,
    location,
    fixedSalary,
    salaryFrom,
    salaryTo
  } = req.body;

  if(!title || !description || !category || !country|| !city|| !location){
    return next(new ErrorHandler("Please provide full job details",400));
  }

  if ((!salaryFrom || !salaryTo ) && !fixedSalary) {
    return next(
      new ErrorHandler(
        "Please either provide fixed salary or ranged salary.",
        400
      )
    );
  }
  if (salaryFrom && salaryTo && fixedSalary){
    return next(
      new ErrorHandler("Cannot Enter Fixed and Ranged Salary together.",400)

    );
  }
  const postedBy = req.user._id;
  const job = await Job.create({
    title,
    description,
    category,
    country,
    city,
    location,
    fixedSalary,
    salaryFrom,
    salaryTo,
    postedBy
  })

  res.status(200).json({
    success: true,
    message: "Job posted successfully",
    job
  })

});

export const getmyJobs = catchAsyncError(async(req, res, next) =>{
  const {role} = req.user;
  if (role === "Job Seeker"){
    return next(
      new ErrorHandler(
        "Job Seeker not allowed to access this resources!",
        400
      )
    );
  }
  const myjobs = await Job.find({postedBy: req.user._id});
  res.status(200).json({
    success: true,
    myjobs,
  });
});