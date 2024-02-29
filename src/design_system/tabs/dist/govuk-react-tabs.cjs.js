'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./govuk-react-tabs.cjs.prod.js");
} else {
  module.exports = require("./govuk-react-tabs.cjs.dev.js");
}
