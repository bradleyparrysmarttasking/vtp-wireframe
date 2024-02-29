import styled from 'styled-components';
import { GUTTER_HALF, MEDIA_QUERIES } from '@govuk-react/constants';
import { spacing } from '@govuk-react/lib';

/**
 * ### References:
 *
 * - https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/_grid_layout.scss
 * - https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_layout.scss
 */

/**
 * Grid Row, to be used as a parent component for GridCol.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/grid-row
 */
const GridRow = styled('div').withConfig({
  displayName: "src__GridRow",
  componentId: "sc-1jwfkx4-0"
})({
  display: 'flex',
  flexDirection: 'column',
  margin: `0 -${GUTTER_HALF}`,
  [MEDIA_QUERIES.LARGESCREEN]: {
    flexDirection: 'row'
  }
}, spacing.withWhiteSpace());
GridRow.displayName = 'GridRow';

export { GridRow, GridRow as default };
