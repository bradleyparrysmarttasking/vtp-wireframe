import styled from 'styled-components';
import { SPACING_POINTS } from '@govuk-react/constants';
import { typography, spacing } from '@govuk-react/lib';

/**
 * ### References
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/core/_lists.scss
 */

/**
 * Use lists to make blocks of text easier to read, and to break information into manageable chunks.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/list-item
 * - https://design-system.service.gov.uk/styles/typography/#lists
 */
const ListItem = styled('li').withConfig({
  displayName: "src__ListItem",
  componentId: "sc-u4zf5o-0"
})(typography.font({
  size: 19
}), {
  marginBottom: SPACING_POINTS[1]
}, spacing.withWhiteSpace());
ListItem.displayName = 'ListItem';

export { ListItem, ListItem as default };
