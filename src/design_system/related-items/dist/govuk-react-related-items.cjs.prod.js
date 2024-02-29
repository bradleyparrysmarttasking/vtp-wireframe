'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styled = require('styled-components');
var govukColours = require('govuk-colours');
var constants = require('@govuk-react/constants');
var lib = require('@govuk-react/lib');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefault(styled);

/**
 * Component showing related content, including topics, guidance and collections.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/related-items
 * - https://components.publishing.service.gov.uk/component-guide/related_navigation
 */
const RelatedItems = styled__default["default"]('div').withConfig({
  displayName: "src__RelatedItems",
  componentId: "sc-dvwdy9-0"
})({
  borderTop: `10px solid ${govukColours.BLUE}`,
  paddingTop: constants.SPACING.SCALE_1,
  width: '100%',
  [constants.MEDIA_QUERIES.LARGESCREEN]: {
    fontSize: constants.FONT_SIZE.SIZE_16,
    lineHeight: constants.LINE_HEIGHT.SIZE_16
  },
  '> h3': {
    marginBottom: constants.SPACING.SCALE_2
  },
  '> ul': {
    marginBottom: constants.SPACING.SCALE_4,
    '> li': {
      marginBottom: `calc(${constants.SPACING.SCALE_2} + 2px)`
    }
  }
}, lib.spacing.withWhiteSpace({
  marginBottom: 0
}));
RelatedItems.displayName = 'RelatedItems';

exports.RelatedItems = RelatedItems;
exports["default"] = RelatedItems;
