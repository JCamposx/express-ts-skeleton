import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";

import NODE_ENVS from "./utils/enums/nodeEnvs.enum";
import { FRONTEND_URL, NODE_ENV } from "./config";

import { responseErrorHandler } from "./middlewares/errorHandler.middleware";
import router from "./routes/index.routes";

const app: Application = express();

if (NODE_ENV === NODE_ENVS.DEVELOPMENT) {
  app.use(morgan("dev"));
} else if (NODE_ENV === NODE_ENVS.PRODUCTION) {
  app.use(morgan("combined"));
}

app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
  }),
);

app.use(express.json());

app.use("/api", router);

app.use(responseErrorHandler);

export default app;
