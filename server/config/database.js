import mongoose from "mongoose";

export const connectDB = async (mongodb_url) => {
  try {
    mongoose
      .connect(mongodb_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("Base de datos conectada"))
      .catch((err) => console.error(err));
  } catch (error) {
    console.log(error);
  }
};
