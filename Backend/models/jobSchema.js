import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide job title."],
    minLength: [3, "Title must contain at least 3 Characters!"],
    maxLength: [30, "Title cannot exceed 30 Characters!"],
  },
  description: {
    type: String,
    required: [true, "Please provide job description."],
    minLength: [30, "Description must contain at least 30 Characters!"],
    maxLength: [5000, "Description cannot exceed 500 Characters!"],
  },
  category: {
    type: String,
    required: [true, "Job category is required!"],
  },
  country: {
    type: String,
    required: [true, "Please provide a country name."],
  },
  city: {
    type: String,
    required: [true, "Please provide a city name."],
  },
  location: {
    type: String,
    required: [true, "Please provide exact location."],
    minLength: [20, "Location must contaian at least 50 characters!"],
  },
  fixedSalary: {
    type: Number,
    minLength: [4, "Fixed salary must contain at least 4 digits"],
    maxLength: [15, "Fixed salary cannot exceed 9 digits"],
  },
  salaryFrom: {
    type: Number,
    minLength: [4, "Salary From must contain at least 4 digits"],
    maxLength: [15, "Salary From cannot exceed 9 digits"],
  },
  salaryTo: {
    type: Number,
    minLength: [4, "SalaryTo must contain at least 4 digits"],
    maxLength: [9, "SalaryTo cannot exceed 9 digits"],
  },
  expired: {
    type: Boolean,
    default: false,
  },
  jobPostedOn: {
    type: Date,
    default: Date.now,
  },
  postedBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

export const Job = mongoose.model("Job", jobSchema);