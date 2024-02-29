import * as React from 'react';
import styled from 'styled-components';
import { SPACING, SITE_WIDTH, MEDIA_QUERIES } from '@govuk-react/constants';

const OuterContainer = styled('div').withConfig({
  displayName: "src__OuterContainer",
  componentId: "sc-1lvyroj-0"
})({
  paddingTop: SPACING.SCALE_5,
  textAlign: 'center'
});

// This is currently 'width-container' and not 'main' from govuk-frontend
// Maybe we should deprecate this component in favour of Page.Main and Page.WidthContainer?
const InnerContainer = styled('div').withConfig({
  displayName: "src__InnerContainer",
  componentId: "sc-1lvyroj-1"
})({
  maxWidth: SITE_WIDTH,
  marginLeft: SPACING.SCALE_3,
  marginRight: SPACING.SCALE_3,
  textAlign: 'left',
  [MEDIA_QUERIES.LARGESCREEN]: {
    marginLeft: SPACING.SCALE_5,
    marginRight: SPACING.SCALE_5
  },
  // no 1020px breakpoint in constants yet, not sure why
  '@media only screen and (min-width:1020px)': {
    margin: '0 auto'
  }
});

/**
 * Provides a container which aligns to the TopNav component, is centered, and provides top padding.
 *
 * Note, this equivalent to 'width-container' from govuk-frontend.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/main
 * - https://design-system.service.gov.uk/styles/layout/#page-wrappers
 */
const Main = _ref => {
  let {
    children,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(OuterContainer, props, /*#__PURE__*/React.createElement(InnerContainer, null, children));
};
Main.displayName = 'Main';
Main.defaultProps = {
  children: undefined
};

export { Main, Main as default };
