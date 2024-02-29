'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styled = require('styled-components');
var lib = require('@govuk-react/lib');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefault(styled);

/**
 * Styled text to use as a label for a form input.
 *
 * This is not a label element by default as it is assumed it will be wrapped with Label component.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/label-text
 */
const LabelText = styled__default["default"]('span').withConfig({
  displayName: "src__LabelText",
  componentId: "sc-1lbxenh-0"
})(lib.typography.font({
  size: 19
}), lib.typography.textColour, {
  display: 'block',
  clear: 'none',
  paddingBottom: '2px'
}, lib.spacing.withWhiteSpace({
  marginBottom: 0
}));
LabelText.displayName = 'LabelText';

exports.LabelText = LabelText;
exports["default"] = LabelText;
