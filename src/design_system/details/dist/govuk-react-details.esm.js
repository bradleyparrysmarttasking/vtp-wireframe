import * as React from 'react';
import styled from 'styled-components';
import { typography, spacing, shape } from '@govuk-react/lib';
import { stripUnit } from 'polished';
import { LINK_COLOUR, LINK_HOVER_COLOUR, FOCUS_COLOUR, BLACK, BORDER_COLOUR } from 'govuk-colours';
import { FOCUS_WIDTH, SPACING_POINTS, BORDER_WIDTH } from '@govuk-react/constants';

/**
 * ### References
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/details/_details.scss
 */
const CUSTOM_FOCUS_WIDTH = `${Number(stripUnit(FOCUS_WIDTH)) + 1}px`;
const StyledDetails = styled('details').withConfig({
  displayName: "src__StyledDetails",
  componentId: "sc-273hbe-0"
})(typography.font({
  size: 19
}), typography.textColour, spacing.withWhiteSpace({
  marginBottom: 6
}), {
  display: 'block'
});
const StyledSummary = styled('summary').withConfig({
  displayName: "src__StyledSummary",
  componentId: "sc-273hbe-1"
})({
  display: 'inline-block',
  position: 'relative',
  marginBottom: SPACING_POINTS[1],
  paddingLeft: Number(stripUnit(SPACING_POINTS[4])) + Number(stripUnit(BORDER_WIDTH)),
  color: LINK_COLOUR,
  cursor: 'pointer',
  ':hover': {
    color: LINK_HOVER_COLOUR
  },
  ':focus': {
    outline: `${CUSTOM_FOCUS_WIDTH} solid ${FOCUS_COLOUR}`,
    outlineOffset: -1,
    color: BLACK,
    background: FOCUS_COLOUR
  },
  '::-webkit-details-marker': {
    display: 'none'
  },
  ':before': {
    content: '""',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    margin: 'auto',
    ...shape.arrow({
      direction: 'right',
      base: 14
    }),
    '[open] > &': shape.arrow({
      direction: 'down',
      base: 14
    })
  }
});
const SummaryText = styled('span').withConfig({
  displayName: "src__SummaryText",
  componentId: "sc-273hbe-2"
})({
  textDecoration: 'underline'
});
const DetailsText = styled('div').withConfig({
  displayName: "src__DetailsText",
  componentId: "sc-273hbe-3"
})({
  padding: SPACING_POINTS[3],
  paddingLeft: SPACING_POINTS[4],
  borderLeft: `${BORDER_WIDTH} solid ${BORDER_COLOUR}`,
  p: {
    marginTop: 0,
    marginBottom: SPACING_POINTS[4]
  },
  '> :last-child, p:last-child': {
    marginBottom: 0
  }
});

/**
 * Make a page easier to scan by letting users reveal more detailed information only if they need it.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/details
 * - https://design-system.service.gov.uk/components/details/
 */
const Details = _ref => {
  let {
    summary,
    children,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(StyledDetails, props, /*#__PURE__*/React.createElement(StyledSummary, null, /*#__PURE__*/React.createElement(SummaryText, null, summary)), /*#__PURE__*/React.createElement(DetailsText, null, children));
};
Details.defaultProps = {
  children: undefined,
  open: false
};
Details.displayName = 'Details';

export { Details, Details as default };
