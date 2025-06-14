import mongoose from "mongoose";

export const connectDB = async () => {
	const MONGODB_URI = process.env.MONGODB_URI;

	try {
		if (!MONGODB_URI) {
			throw new Error("⚠️ MISSING MONGODB_URI in environment variables");
		}
		if (mongoose.connection.readyState >= 1) {
			return;
		  }
		const conn = await mongoose.connect(MONGODB_URI );
		console.log(`MongoDB connected: ${conn.connection.host}`);
	} catch (error) {
		console.log("Error connecting to MONGODB", error.message);
		process.exit(1);
	}
};
