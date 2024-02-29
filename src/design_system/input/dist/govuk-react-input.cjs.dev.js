'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styled = require('styled-components');
var govukColours = require('govuk-colours');
var constants = require('@govuk-react/constants');
var lib = require('@govuk-react/lib');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefault(styled);

/**
 * - https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/
 */

/**
 * Use the text input component when you need to let users enter text that’s no longer than a single line, such as their name or phone number.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/input
 * - https://design-system.service.gov.uk/components/text-input/
 *
 */
const Input = styled__default["default"]('input').withConfig({
  displayName: "src__Input",
  componentId: "sc-1ch9crp-0"
})(lib.typography.font({
  size: 19
}), constants.FOCUSABLE, {
  boxSizing: 'border-box',
  width: '100%',
  height: '40px',
  marginTop: 0,
  padding: constants.SPACING_POINTS[1],
  border: `${constants.BORDER_WIDTH_FORM_ELEMENT} solid ${govukColours.BLACK}`,
  borderRadius: 0,
  appearance: 'none',
  '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
    margin: 0,
    WebkitAppearance: 'none'
  },
  '&[type="number"]': {
    MozAppearance: 'textfield'
  }
}, _ref => {
  let {
    error,
    errorColor
  } = _ref;
  return {
    border: error ? `${constants.BORDER_WIDTH_FORM_ELEMENT_ERROR} solid ${errorColor || govukColours.ERROR_COLOUR}` : undefined
  };
}, lib.spacing.withWhiteSpace({
  marginBottom: 0
}));
Input.defaultProps = {
  type: 'text',
  error: false,
  errorColor: undefined
};
Input.displayName = 'Input';

exports.Input = Input;
exports["default"] = Input;
