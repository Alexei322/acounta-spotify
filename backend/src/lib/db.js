import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MongoDB connected: ${conn.connection.host}`);

    } catch {
        console.log("Failed to connect to MongoDB", error);
        process.exit(1);


    }
}