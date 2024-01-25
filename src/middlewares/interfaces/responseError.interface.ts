/**
 * Interface that represents an error response.
 *
 * @interface
 * @property {string} message - The error message
 * @property {Record<string, string[]>} [errors] - The detailed errors.
 */
interface ResponseError {
  message: string;
  errors?: Record<string, string[]>;
}

export default ResponseError;
