'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./govuk-react-pagination.cjs.prod.js");
} else {
  module.exports = require("./govuk-react-pagination.cjs.dev.js");
}
