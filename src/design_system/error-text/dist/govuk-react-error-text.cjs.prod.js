'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styled = require('styled-components');
var govukColours = require('govuk-colours');
var constants = require('@govuk-react/constants');
var lib = require('@govuk-react/lib');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefault(styled);

/**
 * ### References
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/error-message/_error-message.scss
 */

/**
 * Follow the [validation pattern](https://design-system.service.gov.uk/patterns/validation/) and show an error message when there is a validation error. In the error message explain what went wrong and how to fix it.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/error-text
 * - https://design-system.service.gov.uk/components/error-message/
 */
const ErrorText = styled__default["default"]('span').withConfig({
  displayName: "src__ErrorText",
  componentId: "sc-kkeaok-0"
})(lib.typography.font({
  size: 19,
  weight: 'bold'
}), {
  display: 'block',
  // NB non-responsive spacing
  marginBottom: constants.SPACING_POINTS[3],
  clear: 'both',
  color: govukColours.ERROR_COLOUR
}, lib.spacing.withWhiteSpace());
ErrorText.displayName = 'ErrorText';

exports.ErrorText = ErrorText;
exports["default"] = ErrorText;
