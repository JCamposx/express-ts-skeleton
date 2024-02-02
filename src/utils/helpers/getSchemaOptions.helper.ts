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

        delete modifiedRet._id;
        delete modifiedRet.__v;
        delete modifiedRet.createdAt;
        delete modifiedRet.updatedAt;

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
