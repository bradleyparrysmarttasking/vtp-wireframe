'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styled = require('styled-components');
var lib = require('@govuk-react/lib');
var govukColours = require('govuk-colours');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefault(styled);

/**
 * ### References
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/core/_section-break.scss
 */
const breakSizes = {
  XL: 8,
  XLARGE: 8,
  L: 6,
  LARGE: 6,
  M: 4,
  MEDIUM: 4
};

/**
 * Create a thematic break between sections of content.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/section-break
 * - https://design-system.service.gov.uk/styles/typography/#section-break
 */

const SectionBreak = styled__default["default"]('hr').withConfig({
  displayName: "src__SectionBreak",
  componentId: "sc-fayw97-0"
})({
  margin: 0,
  border: 0
}, _ref => {
  let {
    level
  } = _ref;
  const size = breakSizes[level];
  if (size) {
    return lib.spacing.withWhiteSpace({
      margin: {
        size,
        direction: ['top', 'bottom']
      }
    });
  }
  return lib.spacing.withWhiteSpace();
}, _ref2 => {
  let {
    visible
  } = _ref2;
  return visible ? {
    borderBottom: `1px solid ${govukColours.BORDER_COLOUR}`
  } : undefined;
});
SectionBreak.defaultProps = {
  visible: undefined
};
SectionBreak.displayName = 'SectionBreak';

exports.SectionBreak = SectionBreak;
exports["default"] = SectionBreak;
