import styled from 'styled-components';
import { spacing } from '@govuk-react/lib';
import { BORDER_COLOUR } from 'govuk-colours';

/**
 * ### References
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/core/_section-break.scss
 */
const breakSizes = {
  XL: 8,
  XLARGE: 8,
  L: 6,
  LARGE: 6,
  M: 4,
  MEDIUM: 4
};

/**
 * Create a thematic break between sections of content.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/section-break
 * - https://design-system.service.gov.uk/styles/typography/#section-break
 */

const SectionBreak = styled('hr').withConfig({
  displayName: "src__SectionBreak",
  componentId: "sc-fayw97-0"
})({
  margin: 0,
  border: 0
}, _ref => {
  let {
    level
  } = _ref;
  const size = breakSizes[level];
  if (size) {
    return spacing.withWhiteSpace({
      margin: {
        size,
        direction: ['top', 'bottom']
      }
    });
  }
  return spacing.withWhiteSpace();
}, _ref2 => {
  let {
    visible
  } = _ref2;
  return visible ? {
    borderBottom: `1px solid ${BORDER_COLOUR}`
  } : undefined;
});
SectionBreak.defaultProps = {
  visible: undefined
};
SectionBreak.displayName = 'SectionBreak';

export { SectionBreak, SectionBreak as default };
