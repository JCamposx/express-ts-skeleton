import { SchemaOptions } from "mongoose";

/**
 * Schema options for creating a Mongoose model.
 *
 * @returns {object} - Mongoose schema options.
 */
const getSchemaOptions = <T>(): SchemaOptions<T> => {
  return {
    timestamps: true,
    toJSON: {
      transform: (_doc, ret) => {
        const modifiedRet: typeof ret = { id: ret._id, ...ret };

        modifiedRet._id = undefined;
        modifiedRet.__v = undefined;
        modifiedRet.createdAt = undefined;
        modifiedRet.updatedAt = undefined;

        return modifiedRet;
      },
    },
  };
};

export default getSchemaOptions;
