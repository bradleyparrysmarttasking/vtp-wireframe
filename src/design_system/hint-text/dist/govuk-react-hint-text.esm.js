import styled from 'styled-components';
import { SECONDARY_TEXT_COLOUR } from 'govuk-colours';
import { SPACING_POINTS } from '@govuk-react/constants';
import { typography, spacing } from '@govuk-react/lib';

/**
 * ### References
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/hint/_hint.scss
 */

/**
 * Use hint text alongside a form input for help that’s relevant to the majority of users, like how their information will be used, or where to find it.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/hint-text
 * - https://design-system.service.gov.uk/components/text-input/#hint-text
 */
const HintText = styled('span').withConfig({
  displayName: "src__HintText",
  componentId: "sc-tq1z5r-0"
})(typography.font({
  size: 19
}), {
  display: 'block',
  // NB non-responsive marginBottom here
  marginBottom: SPACING_POINTS[3],
  color: `${SECONDARY_TEXT_COLOUR}`
}, spacing.withWhiteSpace());
HintText.displayName = 'HintText';

export { HintText, HintText as default };