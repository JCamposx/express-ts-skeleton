import supertest, { Response } from "supertest";

import app from "../../app";

import TYPE_FETCHING from "../enums/typeFetching.enum";

const api = supertest(app);

/**
 * Interface that represents the options for sending and HTTP request.
 *
 * @interface
 * @property {string} url - The URL for the HTTP request.
 * @property {TYPE_FETCHING} [type=TYPE_FETCHING.GET] - The HTTP request method type.
 * @property {Record<string, any>} [body={}] - The request payload for POST, PUT, PATCH methods.
 * @property {Record<string, string>} [cookies={}] - The cookies to include in the request.
 * @property {boolean} [checkContentType=true] - Flag to check if the response has a JSON content type.
 */
interface SendHTTPRequestOptions {
  url: string;
  type?: TYPE_FETCHING;
  body?: Record<string, any>;
  cookies?: Record<string, string>;
  checkContentType?: boolean;
}

/**
 * Send HTTP requests for testing.
 *
 * @async
 * @function
 * @param {SendHTTPRequestOptions} options - The options for the HTTP request.
 * @returns {Promise<Response>} The response of the request.
 * @throws {Error} Throws an error if the HTTP method is unsupported.
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
