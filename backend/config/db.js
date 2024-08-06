import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://wahidahmd:wahidarman2020@cluster0.wjhereo.mongodb.net/food-delivery").then(()=>console.log("DB Connected"));
}