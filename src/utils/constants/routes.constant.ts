import urlBuilder from "../helpers/urlBuilder.helper";

/**
 * Constant that represents API endpoints routes.
 *
 * Use these paths with the {@link urlBuilder} utility helper to construct complete URLs.
 */
const ROUTES = {
  EXAMPLES: {
    INDEX: "/api/examples",
    SHOW: "/api/examples/:id",
    STORE: "/api/examples",
  },
};

export default ROUTES;
