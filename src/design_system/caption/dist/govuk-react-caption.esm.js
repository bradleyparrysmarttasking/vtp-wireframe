import styled from 'styled-components';
import { SECONDARY_TEXT_COLOUR } from 'govuk-colours';
import { typography, spacing } from '@govuk-react/lib';
import { CAPTION_SIZES, SPACING_POINTS, MEDIA_QUERIES } from '@govuk-react/constants';

/**
 * ### References
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/core/_typography.scss
 * - https://design-system.service.gov.uk/styles/typography/#headings
 */

/**
 * Sometimes you may need to make it clear that a page is part of a larger section or group. To do this, you can use a heading with a caption above it.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/caption
 * - https://design-system.service.gov.uk/styles/typography/#headings
 */
const Caption = styled('span').withConfig({
  displayName: "src__Caption",
  componentId: "sc-dd9g0r-0"
})(_ref => {
  let {
    size
  } = _ref;
  const actualSize = Number.isNaN(Number(size)) ? CAPTION_SIZES[size] : size;
  if (!actualSize) {
    throw Error(`Unknown size ${size} used for header.`);
  }
  return typography.font({
    size: actualSize
  });
}, _ref2 => {
  let {
    size
  } = _ref2;
  const actualSize = Number.isNaN(Number(size)) ? CAPTION_SIZES[size] : size;

  // bottom margin - hard-coded values because they're a bit odd
  const marginStyle = actualSize > 19 ? {
    marginBottom: SPACING_POINTS[1]
  } : undefined;
  const marginResponsiveStyle = actualSize === 24 ? {
    [MEDIA_QUERIES.TABLET]: {
      marginBottom: 0
    }
  } : undefined;
  return {
    ...marginStyle,
    ...marginResponsiveStyle
  };
}, {
  display: 'block',
  color: SECONDARY_TEXT_COLOUR
}, spacing.withWhiteSpace());
Caption.defaultProps = {
  size: 'XL'
};
Caption.displayName = 'Caption';

export { Caption, Caption as default };
