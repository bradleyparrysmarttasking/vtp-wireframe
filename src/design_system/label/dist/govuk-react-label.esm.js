import styled from 'styled-components';
import { ERROR_COLOUR } from 'govuk-colours';
import { SPACING } from '@govuk-react/constants';
import { spacing } from '@govuk-react/lib';

// https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/

// Our approach to labels/fields differs to govuk-frontend.
// We have no `form-group` - this, to an extent, replaces it.
// We wrap form inputs with a label to associate them, rather than rely on an ID.

/**
 * Label element to wrap label-text and a form input.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/label
 */
const Label = styled('label').withConfig({
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
    borderLeft: error ? `4px solid ${ERROR_COLOUR}` : undefined,
    marginRight: error ? SPACING.SCALE_3 : undefined,
    paddingLeft: error ? SPACING.SCALE_2 : undefined
  };
}, spacing.withWhiteSpace({
  marginBottom: 0
}));
Label.defaultProps = {
  error: false
};
Label.displayName = 'Label';

export { Label, Label as default };