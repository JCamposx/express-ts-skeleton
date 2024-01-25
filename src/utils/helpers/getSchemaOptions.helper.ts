import { Document } from "mongoose";

/**
 * Schema options for creating a Mongoose model.
 *
 * @template T - The type of the document.
 *
 * @returns {object} - Mongoose schema options.
 */
const getSchemaOptions = <T extends Document>(): object => {
  return {
    timestamps: true,
    toJSON: {
      transform: (_doc: T, ret: Record<string, any>) => {
        ret = { id: ret._id, ...ret };

        ret._id = undefined;
        ret.__v = undefined;
        ret.createdAt = undefined;
        ret.updatedAt = undefined;

        return ret;
      },
    },
  };
};

export default getSchemaOptions;
