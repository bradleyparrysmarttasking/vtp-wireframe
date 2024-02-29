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
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/hint/_hint.scss
 */

/**
 * Use hint text alongside a form input for help that’s relevant to the majority of users, like how their information will be used, or where to find it.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/hint-text
 * - https://design-system.service.gov.uk/components/text-input/#hint-text
 */
const HintText = styled__default["default"]('span').withConfig({
  displayName: "src__HintText",
  componentId: "sc-tq1z5r-0"
})(lib.typography.font({
  size: 19
}), {
  display: 'block',
  // NB non-responsive marginBottom here
  marginBottom: constants.SPACING_POINTS[3],
  color: `${govukColours.SECONDARY_TEXT_COLOUR}`
}, lib.spacing.withWhiteSpace());
HintText.displayName = 'HintText';

exports.HintText = HintText;
exports["default"] = HintText;