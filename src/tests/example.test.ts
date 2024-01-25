import { Response } from "supertest";

import TYPE_FETCHING from "../utils/enums/typeFetching.enum";
import ROUTES from "../utils/constants/routes.constant";

import sendHTTPRequest from "../utils/helpers/sendHTTPRequest.helper";
import Example from "../utils/interfaces/example.interface";
import url from "../utils/helpers/urlBuilder.helper";
import ExampleModel from "../models/example/model";

describe(`GET ${ROUTES.EXAMPLES.INDEX}`, () => {
  it("should return a list with complete examples", async () => {
    const EXAMPLES_DATA: Example[] = [
      {
        title: "Example T1",
        description: "Example D1",
      },
      {
        title: "Example T2",
        description: "Example D2",
      },
      {
        title: "Example T3",
        description: "Example D3",
      },
    ];

    await ExampleModel.insertMany(EXAMPLES_DATA);

    const response: Response = await sendHTTPRequest({
      url: url(ROUTES.EXAMPLES.INDEX),
      type: TYPE_FETCHING.GET,
    });

    expect(response.status).toBe(200);

    expect(response.body).toBeDefined();

    expect(response.body).toEqual(
      expect.arrayContaining(
        EXAMPLES_DATA.map((example) => expect.objectContaining(example)),
      ),
    );
  });
});
