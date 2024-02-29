'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var govukColours = require('govuk-colours');
var constants = require('@govuk-react/constants');
var lib = require('@govuk-react/lib');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);
var styled__default = /*#__PURE__*/_interopDefault(styled);

const Link = styled__default["default"]('a').withConfig({
  displayName: "link__Link",
  componentId: "sc-1rdpl6e-0"
})(...lib.link.common(), lib.link.styleText);

/**
 * ### References:
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/breadcrumbs/_breadcrumbs.scss
 */

// Constants for chevron sourced from govuk-frontend
const CHEVRON_SIZE = 7;
const CHEVRON_BORDER_WIDTH = 1;
const CHEVRON_BORDER_COLOUR = govukColours.SECONDARY_TEXT_COLOUR;
const CHEVRON_ALTITUDE_CALCULATED = 5.655;
const BreadcrumbsContainer = styled__default["default"]('div').withConfig({
  displayName: "src__BreadcrumbsContainer",
  componentId: "sc-12g859m-0"
})(lib.typography.font({
  size: 16
}), lib.typography.textColour, {
  // margins here are not responsive, hence why they're not specified using withWhiteSpace
  marginTop: constants.SPACING_POINTS[3],
  marginBottom: constants.SPACING_POINTS[2]
}, lib.spacing.withWhiteSpace());
const BreadcrumbsList = styled__default["default"]('ol').withConfig({
  displayName: "src__BreadcrumbsList",
  componentId: "sc-12g859m-1"
})({
  margin: 0,
  padding: 0,
  listStyleType: 'none',
  display: 'block'
});
const BreadcrumbsListItem = styled__default["default"]('li').withConfig({
  displayName: "src__BreadcrumbsListItem",
  componentId: "sc-12g859m-2"
})({
  display: 'inline-block',
  position: 'relative',
  marginBottom: constants.SPACING_POINTS[1],
  marginLeft: constants.SPACING_POINTS[2],
  paddingLeft: constants.SPACING_POINTS[2] + CHEVRON_ALTITUDE_CALCULATED,
  '::before': {
    content: "''",
    display: 'block',
    position: 'absolute',
    top: '-1px',
    bottom: '1px',
    left: CHEVRON_ALTITUDE_CALCULATED * -2 + CHEVRON_SIZE + CHEVRON_BORDER_WIDTH,
    width: CHEVRON_SIZE,
    height: CHEVRON_SIZE,
    margin: 'auto 0',
    transform: 'rotate(45deg)',
    border: 'solid',
    borderWidth: `${CHEVRON_BORDER_WIDTH}px ${CHEVRON_BORDER_WIDTH}px 0 0`,
    borderColor: CHEVRON_BORDER_COLOUR
  },
  ':first-child': {
    marginLeft: 0,
    paddingLeft: 0,
    '::before': {
      content: 'none',
      display: 'none'
    }
  }
});

/**
 * The breadcrumbs component helps users to understand where they are within a website’s structure and move between levels.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/breadcrumbs
 * - https://design-system.service.gov.uk/components/breadcrumbs/
 */
const Breadcrumbs = _ref => {
  let {
    children,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement(BreadcrumbsContainer, props, /*#__PURE__*/React__namespace.createElement(BreadcrumbsList, null, Array.isArray(children) ? React__namespace.Children.map(children, (child, i) => child ? /*#__PURE__*/React__namespace.createElement(BreadcrumbsListItem, null, child) : null) : /*#__PURE__*/React__namespace.createElement(BreadcrumbsListItem, null, children)));
};
Breadcrumbs.Link = Link;
Breadcrumbs.displayName = 'Breadcrumbs';

exports.Breadcrumbs = Breadcrumbs;
exports["default"] = Breadcrumbs;
