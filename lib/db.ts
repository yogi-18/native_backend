import mongoose from "mongoose";

const db = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL as string);
    console.log("MONGO CONNECTED");
  } catch (error) {
    console.log("Unable To Connect DB", error);
  }
};
export default db;
