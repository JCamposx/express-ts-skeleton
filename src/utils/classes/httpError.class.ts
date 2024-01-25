import HTTPErrorData from "./interfaces/httpError.interface";

/**
 * Class that represents an HTTP Error.
 *
 * @class
 * @extends Error
 * @implements {HTTPErrorData}
 */
class HTTPError extends Error implements HTTPErrorData {
  statusCode: number;

  /**
   * Creates an instance of HTTPError.
   *
   * @param {string} [message="Internal server error"] - The error message.
   * @param {number} [statusCode=500] - The HTTP status code.
   */
  constructor(
    message: string = "Internal server error",
    statusCode: number = 500,
  ) {
    super(message);

    this.statusCode = statusCode;
  }
}

export default HTTPError;
