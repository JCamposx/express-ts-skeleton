import { Document } from "mongoose";

import Example from "../../../utils/interfaces/example.interface";

/**
 * Interface that represents a Mongoose document for the Example model.
 *
 * @interface
 * @extends Document
 * @extends Example
 */
interface ExampleDocument extends Document, Example {}

export default ExampleDocument;
