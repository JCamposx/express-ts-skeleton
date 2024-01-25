import { ZodType, z } from "zod";

import Example from "../utils/interfaces/example.interface";

/**
 * Class that encapsulates Zod schemas for the Example model.
 */
class ExampleSchema {
  /**
   * Zod schema for storing Examples.
   *
   * @type {ZodType<Example>}
   */
  static store: ZodType<Example> = z.object({
    title: z.string(),
    description: z.string(),
  });
}

export default ExampleSchema;
