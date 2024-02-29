'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styled = require('styled-components');
var lib = require('@govuk-react/lib');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefault(styled);

/**
 * ### References
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/core/_links.scss
 */
/**
 * Link/Anchor element.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/link
 * - https://design-system.service.gov.uk/styles/typography/#links
 */
const Link = styled__default["default"]('a').withConfig({
  shouldForwardProp: prop => !['noVisitedState', 'textColour', 'muted'].includes(prop),
  displayName: "src__Link",
  componentId: "sc-1loawqx-0"
})(...lib.link.common(), lib.link.styleDefault, lib.link.printFriendly, _ref => {
  let {
    muted
  } = _ref;
  return muted ? lib.link.styleMuted : undefined;
}, _ref2 => {
  let {
    textColour
  } = _ref2;
  return textColour ? lib.link.styleText : undefined;
}, _ref3 => {
  let {
    noVisitedState
  } = _ref3;
  return noVisitedState ? lib.link.styleNoVisitedState : undefined;
});
Link.defaultProps = {
  muted: false,
  textColour: false,
  noVisitedState: false
};
Link.displayName = 'Link';

exports.Link = Link;
exports["default"] = Link;
