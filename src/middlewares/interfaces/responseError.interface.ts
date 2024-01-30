/**
 * Interface that represents an error response.
 */
interface ResponseError {
  /**
   * The error message
   */
  message: string;

  /**
   * The detailed errors.
   */
  errors?: Record<string, string[]>;
}

export default ResponseError;
