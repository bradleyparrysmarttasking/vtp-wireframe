import * as React from 'react';
import SkipLink from '@govuk-react/skip-link';
import TopNav from '@govuk-react/top-nav';
import styled from 'styled-components';
import { spacing } from '@govuk-react/lib';
import { SITE_WIDTH, GUTTER_HALF, MEDIA_QUERIES, GUTTER } from '@govuk-react/constants';

// tracking https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/objects/_main-wrapper.scss
const Main = styled('main').withConfig({
  displayName: "main__Main",
  componentId: "sc-hiygwk-0"
})(spacing.withWhiteSpace({
  padding: {
    size: 6,
    direction: ['top', 'bottom']
  }
}), {
  display: 'block'
});

// tracking https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/objects/_width-container.scss
const WidthContainer = styled('div').withConfig({
  displayName: "width-container__WidthContainer",
  componentId: "sc-paw03d-0"
})({
  maxWidth: SITE_WIDTH,
  margin: `0 ${GUTTER_HALF}`,
  [MEDIA_QUERIES.TABLET]: {
    margin: `0 ${GUTTER}`
  },
  [MEDIA_QUERIES.MAX]: {
    margin: '0 auto'
  }
}, spacing.withWhiteSpace());

/**
 * ### References
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/objects/_main-wrapper.scss
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/objects/_width-container.scss
 */

/**
 * Use this template to keep your pages consistent with the rest of GOV.UK.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/page
 * - https://design-system.service.gov.uk/styles/page-template/
 * - https://design-system.service.gov.uk/styles/layout/#page-wrappers
 */
const Page = _ref => {
  let {
    header,
    footer,
    children,
    id,
    beforeChildren,
    main: MainComponent,
    container: Container
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SkipLink, {
    href: `#${id}`
  }), header, /*#__PURE__*/React.createElement(Container, null, beforeChildren, /*#__PURE__*/React.createElement(MainComponent, {
    id: id
  }, children)), footer);
};
Page.Main = Main;
Page.WidthContainer = WidthContainer;
Page.defaultProps = {
  children: undefined,
  id: 'content',
  header: /*#__PURE__*/React.createElement(TopNav, null),
  footer: undefined,
  main: Page.Main,
  beforeChildren: undefined,
  container: Page.WidthContainer
};
Page.displayName = 'Page';

export { Page, Page as default };
