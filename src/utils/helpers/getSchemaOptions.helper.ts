import { SchemaOptions } from "mongoose";

/**
 * Schema options for creating a Mongoose model.
 *
 * @returns Mongoose schema options.
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
    toObject: {
      transform: (_doc, ret) => {
        const modifiedRet: typeof ret = { ...ret };

        const parsedRet = JSON.parse(JSON.stringify(modifiedRet));

        return parsedRet;
      },
    },
  };
};

export default getSchemaOptions;
