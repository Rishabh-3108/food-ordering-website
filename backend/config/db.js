import mongoose from "mongoose";

export const connectDB = async () => {
    // Reference the variable from the .env file
    await mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log("DB Connected"))
        .catch((err) => console.log("DB Connection Error:", err));
}