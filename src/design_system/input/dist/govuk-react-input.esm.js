import styled from 'styled-components';
import { BLACK, ERROR_COLOUR } from 'govuk-colours';
import { FOCUSABLE, SPACING_POINTS, BORDER_WIDTH_FORM_ELEMENT, BORDER_WIDTH_FORM_ELEMENT_ERROR } from '@govuk-react/constants';
import { typography, spacing } from '@govuk-react/lib';

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
const Input = styled('input').withConfig({
  displayName: "src__Input",
  componentId: "sc-1ch9crp-0"
})(typography.font({
  size: 19
}), FOCUSABLE, {
  boxSizing: 'border-box',
  width: '100%',
  height: '40px',
  marginTop: 0,
  padding: SPACING_POINTS[1],
  border: `${BORDER_WIDTH_FORM_ELEMENT} solid ${BLACK}`,
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
    border: error ? `${BORDER_WIDTH_FORM_ELEMENT_ERROR} solid ${errorColor || ERROR_COLOUR}` : undefined
  };
}, spacing.withWhiteSpace({
  marginBottom: 0
}));
Input.defaultProps = {
  type: 'text',
  error: false,
  errorColor: undefined
};
Input.displayName = 'Input';

export { Input, Input as default };