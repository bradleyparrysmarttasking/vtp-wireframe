'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styled = require('styled-components');
var constants = require('@govuk-react/constants');
var lib = require('@govuk-react/lib');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefault(styled);

/**
 * ### References:
 *
 * - https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/_grid_layout.scss
 * - https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_layout.scss
 */

/**
 * Grid Row, to be used as a parent component for GridCol.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/grid-row
 */
const GridRow = styled__default["default"]('div').withConfig({
  displayName: "src__GridRow",
  componentId: "sc-1jwfkx4-0"
})({
  display: 'flex',
  flexDirection: 'column',
  margin: `0 -${constants.GUTTER_HALF}`,
  [constants.MEDIA_QUERIES.LARGESCREEN]: {
    flexDirection: 'row'
  }
}, lib.spacing.withWhiteSpace());
GridRow.displayName = 'GridRow';

exports.GridRow = GridRow;
exports["default"] = GridRow;
