import styled from 'styled-components';
import { SPACING_POINTS, BORDER_WIDTH_WIDE } from '@govuk-react/constants';
import { typography, spacing } from '@govuk-react/lib';
import { BORDER_COLOUR } from 'govuk-colours';

/**
 * ### References
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/inset-text/_inset-text.scss
 */

/**
 * Use the inset text component to differentiate a block of text from the content that surrounds it.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/inset-text
 * - https://design-system.service.gov.uk/components/inset-text/
 */
const InsetText = styled('div').withConfig({
  displayName: "src__InsetText",
  componentId: "sc-5ju5m4-0"
})(typography.font({
  size: 19
}), typography.textColour, {
  padding: SPACING_POINTS[3]
}, spacing.withWhiteSpace({
  margin: {
    size: 6,
    direction: ['top', 'bottom']
  }
}), {
  clear: 'both',
  borderLeft: `${BORDER_WIDTH_WIDE} solid ${BORDER_COLOUR}`,
  ':first-child': {
    marginTop: 0
  },
  ':only-child,:last-child': {
    marginBottom: 0
  }
});
InsetText.displayName = 'InsetText';

export { InsetText, InsetText as default };
