import { Router } from "express";

import validateSchema from "../middlewares/validateSchema.middleware";
import ExampleController from "../controllers/example.controller";
import ExampleSchema from "../schemas/example.schema";

const router = Router();

router.get("/", ExampleController.index);

router.get("/:id", ExampleController.show);

router.post("/", validateSchema(ExampleSchema.store), ExampleController.store);

export default router;
