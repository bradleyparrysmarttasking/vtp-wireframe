import * as React from 'react';
import styled from 'styled-components';
import { WHITE } from 'govuk-colours';
import { typography, spacing } from '@govuk-react/lib';
import { BORDER_WIDTH, SPACING_POINTS, MEDIA_QUERIES } from '@govuk-react/constants';
import { stripUnit } from 'polished';

/**
 * ### References:
 *
 * - https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/panel
 */
const RAW_BORDER_WIDTH = Number(stripUnit(BORDER_WIDTH));
const StyledPanel = styled('div').withConfig({
  displayName: "src__StyledPanel",
  componentId: "sc-12tinr5-0"
})(typography.font({
  size: 19
}), {
  boxSizing: 'border-box',
  marginBottom: SPACING_POINTS[3],
  // NB govuk-frontend has this element styled tablet-first
  padding: SPACING_POINTS[6] - RAW_BORDER_WIDTH,
  border: `${BORDER_WIDTH} solid transparent`,
  textAlign: 'center',
  // NB govuk-frontend has this media query as an `until tablet` (thus for mobile)
  [MEDIA_QUERIES.TABLET]: {
    padding: SPACING_POINTS[7] - RAW_BORDER_WIDTH
  },
  color: WHITE,
  background: '#00703c'
}, spacing.withWhiteSpace());

// NB govuk-frontend allows for the headingLevel to change, but defaults to h1
// we're not supporting headingLevel at this time
const StyledTitle = styled('h1').withConfig({
  displayName: "src__StyledTitle",
  componentId: "sc-12tinr5-1"
})({
  marginTop: 0,
  marginBottom: SPACING_POINTS[6],
  ':last-child': {
    marginBottom: 0
  }
}, typography.font({
  size: 48,
  weight: 'bold'
}));
const StyledBody = styled('div').withConfig({
  displayName: "src__StyledBody",
  componentId: "sc-12tinr5-2"
})(typography.font({
  size: 36
}));

/**
 * The panel component is a visible container used on confirmation or results pages to highlight important content.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/panel
 * - https://design-system.service.gov.uk/components/panel/
 *
 */

const Panel = _ref => {
  let {
    title,
    children,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(StyledPanel, props, /*#__PURE__*/React.createElement(StyledTitle, null, title), children && /*#__PURE__*/React.createElement(StyledBody, null, children));
};
Panel.defaultProps = {
  children: undefined
};
Panel.displayName = 'Panel';

export { Panel, Panel as default };
