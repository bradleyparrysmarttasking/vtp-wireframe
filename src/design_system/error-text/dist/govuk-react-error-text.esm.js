import styled from 'styled-components';
import { ERROR_COLOUR } from 'govuk-colours';
import { SPACING_POINTS } from '@govuk-react/constants';
import { typography, spacing } from '@govuk-react/lib';

/**
 * ### References
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/error-message/_error-message.scss
 */

/**
 * Follow the [validation pattern](https://design-system.service.gov.uk/patterns/validation/) and show an error message when there is a validation error. In the error message explain what went wrong and how to fix it.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/error-text
 * - https://design-system.service.gov.uk/components/error-message/
 */
const ErrorText = styled('span').withConfig({
  displayName: "src__ErrorText",
  componentId: "sc-kkeaok-0"
})(typography.font({
  size: 19,
  weight: 'bold'
}), {
  display: 'block',
  // NB non-responsive spacing
  marginBottom: SPACING_POINTS[3],
  clear: 'both',
  color: ERROR_COLOUR
}, spacing.withWhiteSpace());
ErrorText.displayName = 'ErrorText';

export { ErrorText, ErrorText as default };