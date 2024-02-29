import * as React from 'react';
import styled from 'styled-components';
import { BORDER_COLOUR } from 'govuk-colours';
import { SPACING_POINTS } from '@govuk-react/constants';
import { spacing, typography } from '@govuk-react/lib';
import Tag from '@govuk-react/tag';

/**
 * ### References:
 *
 * - https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/phase-banner
 */
const StyledBanner = styled('div').withConfig({
  displayName: "src__StyledBanner",
  componentId: "sc-11ccy2-0"
})({
  paddingTop: SPACING_POINTS[2],
  paddingBottom: SPACING_POINTS[2],
  borderBottom: `1px solid ${BORDER_COLOUR}`
}, spacing.withWhiteSpace());
const BannerContent = styled('p').withConfig({
  displayName: "src__BannerContent",
  componentId: "sc-11ccy2-1"
})(typography.font({
  size: 16
}), typography.textColour, {
  display: 'table',
  margin: 0,
  [String(Tag)]: {
    marginRight: SPACING_POINTS[2]
  }
});
const BannerText = styled('span').withConfig({
  displayName: "src__BannerText",
  componentId: "sc-11ccy2-2"
})({
  display: 'table-cell',
  verticalAlign: 'baseline'
});

/**
 * Use the phase banner component to show users your service is still being worked on.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/phase-banner
 * - https://design-system.service.gov.uk/components/phase-banner/
 */
const PhaseBanner = _ref => {
  let {
    level,
    children,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(StyledBanner, props, /*#__PURE__*/React.createElement(BannerContent, null, /*#__PURE__*/React.createElement(Tag, null, level), /*#__PURE__*/React.createElement(BannerText, null, children)));
};
PhaseBanner.displayName = 'PhaseBanner';

export { PhaseBanner, PhaseBanner as default };
