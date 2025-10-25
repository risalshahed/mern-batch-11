import mongoose from "mongoose"

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(`Database successfully connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`ConenctionError: ${error.message}`);
    process.exit(1);
  }
}