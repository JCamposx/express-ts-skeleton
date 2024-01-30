import { isValidObjectId } from "mongoose";

import ExampleDocument from "../models/example/interfaces/document.interface";
import Example from "../utils/interfaces/example.interface";
import HTTPError from "../utils/classes/httpError.class";
import ExampleModel from "../models/example/model";

/**
 * Service class that provides services related to examples.
 */
class ExampleService {
  /**
   * Gets all examples.
   */
  static async getAll(): Promise<ExampleDocument[]> {
    const examples: ExampleDocument[] = await ExampleModel.find();

    return examples;
  }

  /**
   * Gets an specific example by its ID.
   *
   * @param id - The ID of the ExampleDocument to retrieve.
   * @returns A promise that resolves to an example.
   * @throws {HTTPError} Sn HTTPError with a 404 status if the ExampleDocument is not found.
   */
  static async getById(id: string): Promise<ExampleDocument> {
    if (!isValidObjectId(id)) {
      throw new HTTPError("Invalid example ID", 400);
    }

    const example: ExampleDocument | null = await ExampleModel.findById(id);

    if (!example) {
      throw new HTTPError("Example not found", 404);
    }

    return example;
  }

  /**
   * Stores a new example.
   *
   * @param example - The example data to be stored.
   * @returns A promise that resolves to the newly created example.
   */
  static async store(example: Example): Promise<ExampleDocument> {
    const newExample: ExampleDocument = await ExampleModel.create(example);

    return newExample;
  }
}

export default ExampleService;
