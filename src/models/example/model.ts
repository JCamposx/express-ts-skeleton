import { Model, Schema, model } from "mongoose";

import getSchemaOptions from "../../utils/helpers/getSchemaOptions.helper";
import ExampleDocument from "./interfaces/document.interface";

const exampleSchema = new Schema<ExampleDocument>(
  {
    title: {
      type: String,
      required: true,
      maxLength: 255,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  getSchemaOptions<ExampleDocument>(),
);

const ExampleModel: Model<ExampleDocument> = model<ExampleDocument>(
  "Example",
  exampleSchema,
);

export default ExampleModel;
