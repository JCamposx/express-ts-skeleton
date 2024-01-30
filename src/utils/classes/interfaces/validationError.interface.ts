/**
 * Interface that represents a validation error.
 */
interface ValidationError {
  /**
   * The detailed validation errors.
   */
  errors: Record<string, string[]>;
}

export default ValidationError;
