import HTTPErrorData from "./interfaces/httpError.interface";

/**
 * Class that represents an HTTP Error.
 */
class HTTPError extends Error implements HTTPErrorData {
  statusCode: number;

  /**
   * Creates an instance of HTTPError.
   *
   * @param message - The error message.
   * @param statusCode - The HTTP status code.
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
