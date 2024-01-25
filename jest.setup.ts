import mongoose from "mongoose";

import connectDB from "./src/db";

beforeAll(async () => {
  await connectDB();
});

afterEach(async () => {
  const collections = await mongoose.connection.db.collections();

  for (const collection of collections) {
    await collection.drop();
  }
});

afterAll(async () => {
  await mongoose.disconnect();
});
