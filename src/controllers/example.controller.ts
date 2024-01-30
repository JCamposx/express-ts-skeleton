import { Request, Response } from "express";

import ExampleDocument from "../models/example/interfaces/document.interface";
import Example from "../utils/interfaces/example.interface";
import ExampleService from "../services/example.service";

/**
 * Controller class for handling Example-related HTTP requests.
 */
class ExampleController {
  /**
   * Retrieves all examples.
   */
  static async index(_req: Request, res: Response) {
    const data: ExampleDocument[] = await ExampleService.getAll();

    res.status(200);
    res.json(data);
  }

  /**
   * Retrieves one example by its ID.
   */
  static async show(req: Request, res: Response) {
    const { id } = req.params;

    const data: ExampleDocument = await ExampleService.getById(id);

    res.status(200);
    res.json(data);
  }

  /**
   * Stores a new example.
   */
  static async store(req: Request, res: Response) {
    const data: Example = {
      title: req.body.title,
      description: req.body.description,
    };

    const newExample: ExampleDocument = await ExampleService.store(data);

    res.status(201);
    res.json(newExample);
  }
}

export default ExampleController;
