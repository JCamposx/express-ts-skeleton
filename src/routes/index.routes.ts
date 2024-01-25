import { RequestHandler, Router } from "express";
import { readdirSync } from "fs";

import { requestErrorHandler } from "../middlewares/errorHandler.middleware";

const PATH_ROUTER = `${__dirname}`;

const router = Router();

const cleanFileName = (fileName: string) => {
  const file = fileName.split(".").shift();

  return file;
};

readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanName = cleanFileName(fileName);

  if (cleanName === "index") {
    return null;
  }

  import(`./${fileName}`).then((moduleRouter) => {
    const updatedModuleRouter = moduleRouter.default as Router;

    updatedModuleRouter.stack = updatedModuleRouter.stack.map((layer) => {
      layer.route.stack = layer.route.stack.map(
        (stackItem: { handle: RequestHandler }) => {
          stackItem.handle = requestErrorHandler(stackItem.handle);

          return stackItem;
        },
      );

      return layer;
    });

    router.use(`/${cleanName}`, updatedModuleRouter);
  });

  return;
});

export default router;
