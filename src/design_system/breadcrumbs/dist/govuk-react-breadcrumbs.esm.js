import * as React from 'react';
import styled from 'styled-components';
import { SECONDARY_TEXT_COLOUR } from 'govuk-colours';
import { SPACING_POINTS } from '@govuk-react/constants';
import { link, typography, spacing } from '@govuk-react/lib';

const Link = styled('a').withConfig({
  displayName: "link__Link",
  componentId: "sc-1rdpl6e-0"
})(...link.common(), link.styleText);

/**
 * ### References:
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/breadcrumbs/_breadcrumbs.scss
 */

// Constants for chevron sourced from govuk-frontend
const CHEVRON_SIZE = 7;
const CHEVRON_BORDER_WIDTH = 1;
const CHEVRON_BORDER_COLOUR = SECONDARY_TEXT_COLOUR;
const CHEVRON_ALTITUDE_CALCULATED = 5.655;
const BreadcrumbsContainer = styled('div').withConfig({
  displayName: "src__BreadcrumbsContainer",
  componentId: "sc-12g859m-0"
})(typography.font({
  size: 16
}), typography.textColour, {
  // margins here are not responsive, hence why they're not specified using withWhiteSpace
  marginTop: SPACING_POINTS[3],
  marginBottom: SPACING_POINTS[2]
}, spacing.withWhiteSpace());
const BreadcrumbsList = styled('ol').withConfig({
  displayName: "src__BreadcrumbsList",
  componentId: "sc-12g859m-1"
})({
  margin: 0,
  padding: 0,
  listStyleType: 'none',
  display: 'block'
});
const BreadcrumbsListItem = styled('li').withConfig({
  displayName: "src__BreadcrumbsListItem",
  componentId: "sc-12g859m-2"
})({
  display: 'inline-block',
  position: 'relative',
  marginBottom: SPACING_POINTS[1],
  marginLeft: SPACING_POINTS[2],
  paddingLeft: SPACING_POINTS[2] + CHEVRON_ALTITUDE_CALCULATED,
  '::before': {
    content: "''",
    display: 'block',
    position: 'absolute',
    top: '-1px',
    bottom: '1px',
    left: CHEVRON_ALTITUDE_CALCULATED * -2 + CHEVRON_SIZE + CHEVRON_BORDER_WIDTH,
    width: CHEVRON_SIZE,
    height: CHEVRON_SIZE,
    margin: 'auto 0',
    transform: 'rotate(45deg)',
    border: 'solid',
    borderWidth: `${CHEVRON_BORDER_WIDTH}px ${CHEVRON_BORDER_WIDTH}px 0 0`,
    borderColor: CHEVRON_BORDER_COLOUR
  },
  ':first-child': {
    marginLeft: 0,
    paddingLeft: 0,
    '::before': {
      content: 'none',
      display: 'none'
    }
  }
});

/**
 * The breadcrumbs component helps users to understand where they are within a website’s structure and move between levels.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/breadcrumbs
 * - https://design-system.service.gov.uk/components/breadcrumbs/
 */
const Breadcrumbs = _ref => {
  let {
    children,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(BreadcrumbsContainer, props, /*#__PURE__*/React.createElement(BreadcrumbsList, null, Array.isArray(children) ? React.Children.map(children, (child, i) => child ? /*#__PURE__*/React.createElement(BreadcrumbsListItem, null, child) : null) : /*#__PURE__*/React.createElement(BreadcrumbsListItem, null, children)));
};
Breadcrumbs.Link = Link;
Breadcrumbs.displayName = 'Breadcrumbs';

export { Breadcrumbs, Breadcrumbs as default };
