'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./govuk-react-warning-text.cjs.prod.js");
} else {
  module.exports = require("./govuk-react-warning-text.cjs.dev.js");
}