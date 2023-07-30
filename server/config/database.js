import mongoose from "mongoose";

export const connectDB = async (mongodb_url) => {
  await mongoose
    .connect(mongodb_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => {
      console.error(err);
      process.exit(0);
    });
};
