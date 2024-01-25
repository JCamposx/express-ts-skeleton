import { PORT } from "./config";

import connectDB from "./db";
import app from "./app";

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
