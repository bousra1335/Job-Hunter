import app from "./app.js";
import cloudinary from "cloudinary";

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
    api_key: process.env.CLOUDINARY_CLIENT_API,
    api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

<<<<<<< HEAD
app.listen(process.env.PORT,() =>{
=======
app.listen(process.env.PORT, () => {
>>>>>>> 4ec7e30121fca8b4000ebfe754e210fa9c531ddd
    console.log(`Server running on port ${process.env.PORT}`);
});