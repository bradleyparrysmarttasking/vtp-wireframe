'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styled = require('styled-components');
var constants = require('@govuk-react/constants');
var lib = require('@govuk-react/lib');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefault(styled);

/**
 * ### References
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/core/_lists.scss
 */

/**
 * Use lists to make blocks of text easier to read, and to break information into manageable chunks.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/list-item
 * - https://design-system.service.gov.uk/styles/typography/#lists
 */
const ListItem = styled__default["default"]('li').withConfig({
  displayName: "src__ListItem",
  componentId: "sc-u4zf5o-0"
})(lib.typography.font({
  size: 19
}), {
  marginBottom: constants.SPACING_POINTS[1]
}, lib.spacing.withWhiteSpace());
ListItem.displayName = 'ListItem';

exports.ListItem = ListItem;
exports["default"] = ListItem;