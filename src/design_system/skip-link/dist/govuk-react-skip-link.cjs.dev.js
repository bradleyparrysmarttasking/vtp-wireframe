'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styled = require('styled-components');
var constants = require('@govuk-react/constants');
var lib = require('@govuk-react/lib');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefault(styled);

/**
 * ### References
 *
 * - https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/skip-link
 */

/**
 *
 * Use the skip link component to help keyboard-only users skip to the main content on a page.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/skip-link
 * - https://design-system.service.gov.uk/components/skip-link/
 */
const SkipLink = styled__default["default"]('a').withConfig({
  displayName: "src__SkipLink",
  componentId: "sc-njuwuz-0"
})(lib.visuallyHidden.focusable(), lib.link.common(), lib.link.styleText, lib.typography.responsive(16), {
  display: 'block',
  padding: `${constants.SPACING_POINTS[2]}px ${constants.SPACING_POINTS[3]}px`,
  '@supports (padding:max(calc(0px)))': {
    paddingRight: `max(${constants.SPACING_POINTS[3]}px, calc(${constants.SPACING_POINTS[3]}px + env(safe-area-inset-right)))`,
    paddingLeft: `max(${constants.SPACING_POINTS[3]}px, calc(${constants.SPACING_POINTS[3]}px + env(safe-area-inset-left)))`
  }
});
SkipLink.defaultProps = {
  children: 'Skip to main content',
  href: '#content'
};
SkipLink.displayName = 'SkipLink';

exports.SkipLink = SkipLink;
exports["default"] = SkipLink;
