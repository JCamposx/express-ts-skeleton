import dotenv from "dotenv";

import NODE_ENVS from "./utils/enums/nodeEnvs.enum";

export const NODE_ENV: string = process.env.NODE_ENV || NODE_ENVS.DEVELOPMENT;

dotenv.config({ path: `.env.${NODE_ENV}` });

export const PORT: string = process.env.PORT || "3000";

export const MONGODB_URI: string =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/db";

export const TOKEN_SECRET: string = process.env.TOKEN_SECRET || "secret";

export const FRONTEND_URL: string = process.env.FRONTEND_URL || "";
