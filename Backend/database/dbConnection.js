import mongoose from "mongoose";
import validator from "validator";

export const dbConnection = ()=> {
    mongoose
        .connect(process.env.MONGO_URL, {
            dbName: "Job-Hunter",

        })
        .then(() => {
            console.log("Connected to database!");
        })
        .catch((err) => {
            console.log(`Some error occured while connecting to database: ${err}`);
        });
};