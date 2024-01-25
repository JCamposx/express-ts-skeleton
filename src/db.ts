import mongoose from "mongoose";

import { MONGODB_URI } from "./config";

/**
 * Connects to the MongoDB database using the provided URI.
 *
 * @async
 * @throws {Error} If there is an error connecting to the database.
 */
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);

    console.log("\x1b[32m%s\x1b[0m", "Successfully connected to DB");
  } catch (error) {
    console.error("Error connecting to DB");
    console.error(error);

    throw new Error();
  }
};

export default connectDB;
