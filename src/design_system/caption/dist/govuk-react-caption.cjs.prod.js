'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styled = require('styled-components');
var govukColours = require('govuk-colours');
var lib = require('@govuk-react/lib');
var constants = require('@govuk-react/constants');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefault(styled);

/**
 * ### References
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/core/_typography.scss
 * - https://design-system.service.gov.uk/styles/typography/#headings
 */

/**
 * Sometimes you may need to make it clear that a page is part of a larger section or group. To do this, you can use a heading with a caption above it.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/caption
 * - https://design-system.service.gov.uk/styles/typography/#headings
 */
const Caption = styled__default["default"]('span').withConfig({
  displayName: "src__Caption",
  componentId: "sc-dd9g0r-0"
})(_ref => {
  let {
    size
  } = _ref;
  const actualSize = Number.isNaN(Number(size)) ? constants.CAPTION_SIZES[size] : size;
  if (!actualSize) {
    throw Error(`Unknown size ${size} used for header.`);
  }
  return lib.typography.font({
    size: actualSize
  });
}, _ref2 => {
  let {
    size
  } = _ref2;
  const actualSize = Number.isNaN(Number(size)) ? constants.CAPTION_SIZES[size] : size;

  // bottom margin - hard-coded values because they're a bit odd
  const marginStyle = actualSize > 19 ? {
    marginBottom: constants.SPACING_POINTS[1]
  } : undefined;
  const marginResponsiveStyle = actualSize === 24 ? {
    [constants.MEDIA_QUERIES.TABLET]: {
      marginBottom: 0
    }
  } : undefined;
  return {
    ...marginStyle,
    ...marginResponsiveStyle
  };
}, {
  display: 'block',
  color: govukColours.SECONDARY_TEXT_COLOUR
}, lib.spacing.withWhiteSpace());
Caption.defaultProps = {
  size: 'XL'
};
Caption.displayName = 'Caption';

exports.Caption = Caption;
exports["default"] = Caption;
