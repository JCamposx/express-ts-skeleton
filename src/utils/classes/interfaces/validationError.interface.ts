/**
 * Interface that represents a validation error.
 *
 * @interface
 * @property {Record<string, string[]>} errors - The detailed validation errors.
 */
interface ValidationError {
  errors: Record<string, string[]>;
}

export default ValidationError;
