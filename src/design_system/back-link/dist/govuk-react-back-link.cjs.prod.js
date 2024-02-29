'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styled = require('styled-components');
var govukColours = require('govuk-colours');
var constants = require('@govuk-react/constants');
var lib = require('@govuk-react/lib');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefault(styled);

/**
 * ### References:
 *
 * - https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/back-link
 */

/**
 * Use the back link component to help users go back to the previous page in a multi-page transaction.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/back-link
 * - https://design-system.service.gov.uk/components/back-link/
 */
const BackLink = styled__default["default"]('a').withConfig({
  displayName: "src__BackLink",
  componentId: "sc-159gh4v-0"
})(lib.typography.font({
  size: 16
}), lib.link.common(), lib.link.styleText, {
  display: 'inline-block',
  position: 'relative',
  // margins here are not responsive, hence why they're not specified using withWhiteSpace
  marginTop: constants.SPACING_POINTS[3],
  marginBottom: constants.SPACING_POINTS[3],
  paddingLeft: '14px',
  textDecoration: 'none',
  '&[href]': {
    borderBottom: `1px solid ${govukColours.BLACK}`
  },
  '::before': {
    ...lib.shape.arrow({
      direction: 'left',
      base: 10,
      height: 6
    }),
    content: "''",
    position: 'absolute',
    top: '-1px',
    bottom: '1px',
    left: 0,
    margin: 'auto'
  }
}, lib.spacing.withWhiteSpace());
BackLink.defaultProps = {
  children: 'Back'
};
BackLink.displayName = 'BackLink';

exports.BackLink = BackLink;
exports["default"] = BackLink;
