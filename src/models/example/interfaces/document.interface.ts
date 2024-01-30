import { Document } from "mongoose";

import Example from "../../../utils/interfaces/example.interface";

/**
 * Interface that represents a Mongoose document for the Example model.
 */
interface ExampleDocument extends Document, Example {}

export default ExampleDocument;
