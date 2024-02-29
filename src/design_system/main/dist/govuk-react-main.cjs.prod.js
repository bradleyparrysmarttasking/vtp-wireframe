'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var constants = require('@govuk-react/constants');

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

const OuterContainer = styled__default["default"]('div').withConfig({
  displayName: "src__OuterContainer",
  componentId: "sc-1lvyroj-0"
})({
  paddingTop: constants.SPACING.SCALE_5,
  textAlign: 'center'
});

// This is currently 'width-container' and not 'main' from govuk-frontend
// Maybe we should deprecate this component in favour of Page.Main and Page.WidthContainer?
const InnerContainer = styled__default["default"]('div').withConfig({
  displayName: "src__InnerContainer",
  componentId: "sc-1lvyroj-1"
})({
  maxWidth: constants.SITE_WIDTH,
  marginLeft: constants.SPACING.SCALE_3,
  marginRight: constants.SPACING.SCALE_3,
  textAlign: 'left',
  [constants.MEDIA_QUERIES.LARGESCREEN]: {
    marginLeft: constants.SPACING.SCALE_5,
    marginRight: constants.SPACING.SCALE_5
  },
  // no 1020px breakpoint in constants yet, not sure why
  '@media only screen and (min-width:1020px)': {
    margin: '0 auto'
  }
});

/**
 * Provides a container which aligns to the TopNav component, is centered, and provides top padding.
 *
 * Note, this equivalent to 'width-container' from govuk-frontend.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/main
 * - https://design-system.service.gov.uk/styles/layout/#page-wrappers
 */
const Main = _ref => {
  let {
    children,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement(OuterContainer, props, /*#__PURE__*/React__namespace.createElement(InnerContainer, null, children));
};
Main.displayName = 'Main';
Main.defaultProps = {
  children: undefined
};

exports.Main = Main;
exports["default"] = Main;
