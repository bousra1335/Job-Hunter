import {catchAsyncError} from '../middlewares/catchAsyncError.js';
import ErrorHandler from '../middlewares/error.js';
import { User } from '../models/userSchema.js';


export const register = (req, res) => {
    // Your register function logic here
};


export const login = catchAsyncError(async(req, res,next)=> {
    const {name, email, phone,role,password} = req.body;
    if (!name  || !email || !phone || !password){
        return next(new ErrorHandler("Please fill full registration form!"));

    }
    const isEmail = await User.findOne({email});
    if(isEmail){
        return next(new ErrorHandler("Email already exists!"));
    }
    const user= await User.create({
        name, 
        email, 
        phone,
        role,
        password,
    });
    res.status(200).json({
        success: true,
        message: "User registered!",
        user,
    })
});