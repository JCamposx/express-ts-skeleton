import ValidationErrorData from "./interfaces/validationError.interface";
import HTTPError from "./httpError.class";

/**
 * Class that represents a validation error.
 *
 * @class
 * @extends HTTPError
 * @implements {ValidationErrorData}
 */
class ValidationError extends HTTPError implements ValidationErrorData {
  errors: Record<string, string[]>;

  /**
   * Creates an instance of ValidationError.
   *
   * @param {Record<string, string[]>} [errors={}] - The detailed validation errors.
   */
  constructor(errors: Record<string, string[]> = {}) {
    super("Failed validating data", 422);

    this.errors = errors;
  }
}

export default ValidationError;
