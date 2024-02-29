import styled from 'styled-components';
import { ERROR_COLOUR } from 'govuk-colours';
import { spacing } from '@govuk-react/lib';
import { SPACING_POINTS, BORDER_WIDTH_FORM_GROUP_ERROR } from '@govuk-react/constants';

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
const FormGroup = styled('div').withConfig({
  displayName: "src__FormGroup",
  componentId: "sc-1m4431t-0"
})(spacing.responsiveMargin({
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
    paddingLeft: SPACING_POINTS[3],
    borderLeft: `${BORDER_WIDTH_FORM_GROUP_ERROR} solid ${ERROR_COLOUR}`,
    '&& &': {
      padding: 0,
      border: 0
    }
  } : undefined;
}, spacing.withWhiteSpace());
FormGroup.defaultProps = {
  error: false
};
FormGroup.displayName = 'FormGroup';

export { FormGroup, FormGroup as default };
