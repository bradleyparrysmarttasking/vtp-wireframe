'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var icons = require('@govuk-react/icons');
var lib = require('@govuk-react/lib');
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

/**
 * ### References:
 *
 * - https://govuk-elements.herokuapp.com/typography/#typography-warning-text
 * - https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/warning-text
 */
const StyledWarningText = styled__default["default"]('div').withConfig({
  displayName: "src__StyledWarningText",
  componentId: "sc-14ghfbq-0"
})({
  alignItems: 'center',
  boxSizing: 'border-box',
  display: 'flex',
  width: '100%'
}, lib.spacing.withWhiteSpace({
  marginBottom: 0
}));
const IconImportantWrapper = styled__default["default"]('div').withConfig({
  displayName: "src__IconImportantWrapper",
  componentId: "sc-14ghfbq-1"
})({
  flex: 'none',
  height: 35,
  marginRight: constants.SPACING_POINTS[3],
  width: 35
});
const WarningTextWrapper = styled__default["default"]('strong').withConfig({
  displayName: "src__WarningTextWrapper",
  componentId: "sc-14ghfbq-2"
})(lib.typography.font({
  size: 19,
  weight: 'bold'
}));

/**
 * Use the warning text component when you need to warn users about something important, such as legal consequences of an action, or lack of action, that they might take.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/warning-text
 * - https://design-system.service.gov.uk/components/warning-text/
 */
const WarningText = _ref => {
  let {
    children,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement(StyledWarningText, props, /*#__PURE__*/React__namespace.createElement(IconImportantWrapper, null, /*#__PURE__*/React__namespace.createElement(icons.IconImportant, null)), /*#__PURE__*/React__namespace.createElement(WarningTextWrapper, null, children));
};
WarningText.displayName = 'WarningText';

exports.WarningText = WarningText;
exports["default"] = WarningText;
