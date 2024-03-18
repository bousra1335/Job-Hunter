import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
export const dbConnection = () => {
    mongoose
        .connect(process.env.MONGO_URL, {
            dbName: "Job-Hunter",

        })
        .then(() => {
            console.log("Connected to database!");
        })
        .catch((err) => {
            console.log(`Some error occurred while connecting to database: ${err}`);
        });
};