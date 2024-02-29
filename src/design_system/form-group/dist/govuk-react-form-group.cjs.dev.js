'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styled = require('styled-components');
var govukColours = require('govuk-colours');
var lib = require('@govuk-react/lib');
var constants = require('@govuk-react/constants');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefault(styled);

/**
 * ### References
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/objects/_form-group.scss
 */

/**
 * For wrapping a set of form fields such as checkboxes.
 *
 * Also see Label and LabelText components.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/form-group
 */
const FormGroup = styled__default["default"]('div').withConfig({
  displayName: "src__FormGroup",
  componentId: "sc-1m4431t-0"
})(lib.spacing.responsiveMargin({
  size: 6,
  direction: 'bottom'
}), {
  '& &:last-of-type': {
    marginBottom: 0
  }
}, _ref => {
  let {
    error
  } = _ref;
  return error ? {
    paddingLeft: constants.SPACING_POINTS[3],
    borderLeft: `${constants.BORDER_WIDTH_FORM_GROUP_ERROR} solid ${govukColours.ERROR_COLOUR}`,
    '&& &': {
      padding: 0,
      border: 0
    }
  } : undefined;
}, lib.spacing.withWhiteSpace());
FormGroup.defaultProps = {
  error: false
};
FormGroup.displayName = 'FormGroup';

exports.FormGroup = FormGroup;
exports["default"] = FormGroup;
