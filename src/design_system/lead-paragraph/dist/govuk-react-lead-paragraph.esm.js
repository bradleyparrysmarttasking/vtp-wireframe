import styled from 'styled-components';
import { typography, spacing } from '@govuk-react/lib';

/**
 * A lead paragraph is an introductory paragraph that you can use at the top of a page to summarise the content.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/lead-paragraph
 * - https://design-system.service.gov.uk/styles/typography/#lead-paragraph
 */
const LeadParagraph = styled('p').withConfig({
  displayName: "src__LeadParagraph",
  componentId: "sc-1bvfkuk-0"
})(typography.textColour, typography.font({
  size: 24
}), {
  marginTop: 0
}, spacing.withWhiteSpace({
  marginBottom: 6
}));
LeadParagraph.displayName = 'LeadParagraph';

export { LeadParagraph, LeadParagraph as default };
