'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styled = require('styled-components');
var constants = require('@govuk-react/constants');
var lib = require('@govuk-react/lib');
var govukColours = require('govuk-colours');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefault(styled);

/**
 * ### References
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/inset-text/_inset-text.scss
 */

/**
 * Use the inset text component to differentiate a block of text from the content that surrounds it.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/inset-text
 * - https://design-system.service.gov.uk/components/inset-text/
 */
const InsetText = styled__default["default"]('div').withConfig({
  displayName: "src__InsetText",
  componentId: "sc-5ju5m4-0"
})(lib.typography.font({
  size: 19
}), lib.typography.textColour, {
  padding: constants.SPACING_POINTS[3]
}, lib.spacing.withWhiteSpace({
  margin: {
    size: 6,
    direction: ['top', 'bottom']
  }
}), {
  clear: 'both',
  borderLeft: `${constants.BORDER_WIDTH_WIDE} solid ${govukColours.BORDER_COLOUR}`,
  ':first-child': {
    marginTop: 0
  },
  ':only-child,:last-child': {
    marginBottom: 0
  }
});
InsetText.displayName = 'InsetText';

exports.InsetText = InsetText;
exports["default"] = InsetText;
