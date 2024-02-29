'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var govukColours = require('govuk-colours');
var constants = require('@govuk-react/constants');
var lib = require('@govuk-react/lib');
var Tag = require('@govuk-react/tag');

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
var Tag__default = /*#__PURE__*/_interopDefault(Tag);

/**
 * ### References:
 *
 * - https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/phase-banner
 */
const StyledBanner = styled__default["default"]('div').withConfig({
  displayName: "src__StyledBanner",
  componentId: "sc-11ccy2-0"
})({
  paddingTop: constants.SPACING_POINTS[2],
  paddingBottom: constants.SPACING_POINTS[2],
  borderBottom: `1px solid ${govukColours.BORDER_COLOUR}`
}, lib.spacing.withWhiteSpace());
const BannerContent = styled__default["default"]('p').withConfig({
  displayName: "src__BannerContent",
  componentId: "sc-11ccy2-1"
})(lib.typography.font({
  size: 16
}), lib.typography.textColour, {
  display: 'table',
  margin: 0,
  [String(Tag__default["default"])]: {
    marginRight: constants.SPACING_POINTS[2]
  }
});
const BannerText = styled__default["default"]('span').withConfig({
  displayName: "src__BannerText",
  componentId: "sc-11ccy2-2"
})({
  display: 'table-cell',
  verticalAlign: 'baseline'
});

/**
 * Use the phase banner component to show users your service is still being worked on.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/phase-banner
 * - https://design-system.service.gov.uk/components/phase-banner/
 */
const PhaseBanner = _ref => {
  let {
    level,
    children,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement(StyledBanner, props, /*#__PURE__*/React__namespace.createElement(BannerContent, null, /*#__PURE__*/React__namespace.createElement(Tag__default["default"], null, level), /*#__PURE__*/React__namespace.createElement(BannerText, null, children)));
};
PhaseBanner.displayName = 'PhaseBanner';

exports.PhaseBanner = PhaseBanner;
exports["default"] = PhaseBanner;
