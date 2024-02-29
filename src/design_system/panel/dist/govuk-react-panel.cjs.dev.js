'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var govukColours = require('govuk-colours');
var lib = require('@govuk-react/lib');
var constants = require('@govuk-react/constants');
var polished = require('polished');

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

/**
 * ### References:
 *
 * - https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/panel
 */
const RAW_BORDER_WIDTH = Number(polished.stripUnit(constants.BORDER_WIDTH));
const StyledPanel = styled__default["default"]('div').withConfig({
  displayName: "src__StyledPanel",
  componentId: "sc-12tinr5-0"
})(lib.typography.font({
  size: 19
}), {
  boxSizing: 'border-box',
  marginBottom: constants.SPACING_POINTS[3],
  // NB govuk-frontend has this element styled tablet-first
  padding: constants.SPACING_POINTS[6] - RAW_BORDER_WIDTH,
  border: `${constants.BORDER_WIDTH} solid transparent`,
  textAlign: 'center',
  // NB govuk-frontend has this media query as an `until tablet` (thus for mobile)
  [constants.MEDIA_QUERIES.TABLET]: {
    padding: constants.SPACING_POINTS[7] - RAW_BORDER_WIDTH
  },
  color: govukColours.WHITE,
  background: '#00703c'
}, lib.spacing.withWhiteSpace());

// NB govuk-frontend allows for the headingLevel to change, but defaults to h1
// we're not supporting headingLevel at this time
const StyledTitle = styled__default["default"]('h1').withConfig({
  displayName: "src__StyledTitle",
  componentId: "sc-12tinr5-1"
})({
  marginTop: 0,
  marginBottom: constants.SPACING_POINTS[6],
  ':last-child': {
    marginBottom: 0
  }
}, lib.typography.font({
  size: 48,
  weight: 'bold'
}));
const StyledBody = styled__default["default"]('div').withConfig({
  displayName: "src__StyledBody",
  componentId: "sc-12tinr5-2"
})(lib.typography.font({
  size: 36
}));

/**
 * The panel component is a visible container used on confirmation or results pages to highlight important content.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/panel
 * - https://design-system.service.gov.uk/components/panel/
 *
 */

const Panel = _ref => {
  let {
    title,
    children,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement(StyledPanel, props, /*#__PURE__*/React__namespace.createElement(StyledTitle, null, title), children && /*#__PURE__*/React__namespace.createElement(StyledBody, null, children));
};
Panel.defaultProps = {
  children: undefined
};
Panel.displayName = 'Panel';

exports.Panel = Panel;
exports["default"] = Panel;
