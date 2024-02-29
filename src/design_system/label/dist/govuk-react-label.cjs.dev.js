'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styled = require('styled-components');
var govukColours = require('govuk-colours');
var constants = require('@govuk-react/constants');
var lib = require('@govuk-react/lib');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefault(styled);

// https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/

// Our approach to labels/fields differs to govuk-frontend.
// We have no `form-group` - this, to an extent, replaces it.
// We wrap form inputs with a label to associate them, rather than rely on an ID.

/**
 * Label element to wrap label-text and a form input.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/label
 */
const Label = styled__default["default"]('label').withConfig({
  displayName: "src__Label",
  componentId: "sc-iqzvxn-0"
})({
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  ':after': {
    content: "''",
    display: 'table',
    clear: 'both'
  }
}, _ref => {
  let {
    error
  } = _ref;
  return {
    borderLeft: error ? `4px solid ${govukColours.ERROR_COLOUR}` : undefined,
    marginRight: error ? constants.SPACING.SCALE_3 : undefined,
    paddingLeft: error ? constants.SPACING.SCALE_2 : undefined
  };
}, lib.spacing.withWhiteSpace({
  marginBottom: 0
}));
Label.defaultProps = {
  error: false
};
Label.displayName = 'Label';

exports.Label = Label;
exports["default"] = Label;
