import supertest, { Response } from "supertest";

import app from "../../app";

import TYPE_FETCHING from "../enums/typeFetching.enum";

const api = supertest(app);

/**
 * Options for sending an HTTP request.
 */
type SendHTTPRequestOptions = {
  /**
   * The URL for the HTTP request.
   */
  url: string;

  /**
   * The HTTP request method type.
   */
  type: TYPE_FETCHING;

  /**
   * The request payload for POST, PUT, PATCH methods.
   */
  body?: Record<string, any>;

  /**
   * The cookies to include in the request.
   */
  cookies?: Record<string, string>;

  /**
   * Flag to check if the response has a JSON content type.
   */
  checkContentType?: boolean;
};

/**
 * Send HTTP requests for testing.
 *
 * @param options - The options for the HTTP request.
 * @returns A promise that resolves with the response of the request.
 * @throws {Error} If the HTTP method is unsupported.
 */
const sendHTTPRequest = async (
  options: SendHTTPRequestOptions,
): Promise<Response> => {
  let response: Response;

  const cookiesString: string = Object.entries(options.cookies || {})
    .map(([key, value]) => `${key}=${value}`)
    .join("; ");

  switch (options.type) {
    case TYPE_FETCHING.GET:
      response = await api
        .get(options.url)
        .set("Accept", "application/json")
        .set("Cookie", cookiesString);
      break;
    case TYPE_FETCHING.POST:
      response = await api
        .post(options.url)
        .send(options.body)
        .set("Accept", "application/json")
        .set("Cookie", cookiesString);
      break;
    case TYPE_FETCHING.PUT:
      response = await api
        .put(options.url)
        .send(options.body)
        .set("Accept", "application/json")
        .set("Cookie", cookiesString);
      break;
    case TYPE_FETCHING.PATCH:
      response = await api
        .patch(options.url)
        .send(options.body)
        .set("Accept", "application/json")
        .set("Cookie", cookiesString);
      break;
    case TYPE_FETCHING.DELETE:
      response = await api
        .delete(options.url)
        .set("Accept", "application/json")
        .set("Cookie", cookiesString);
      break;
    default:
      throw new Error(`Unsupported HTTP method: ${options.type}`);
  }

  if (options.checkContentType) {
    expect(response.headers["content-type"]).toBeDefined();
    expect(response.headers["content-type"]).toMatch(/application\/json/);
  }

  return response;
};

export default sendHTTPRequest;
