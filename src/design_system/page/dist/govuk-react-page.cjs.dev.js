'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var SkipLink = require('@govuk-react/skip-link');
var TopNav = require('@govuk-react/top-nav');
var styled = require('styled-components');
var lib = require('@govuk-react/lib');
var constants = require('@govuk-react/constants');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);
var SkipLink__default = /*#__PURE__*/_interopDefault(SkipLink);
var TopNav__default = /*#__PURE__*/_interopDefault(TopNav);
var styled__default = /*#__PURE__*/_interopDefault(styled);

// tracking https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/objects/_main-wrapper.scss
const Main = styled__default["default"]('main').withConfig({
  displayName: "main__Main",
  componentId: "sc-hiygwk-0"
})(lib.spacing.withWhiteSpace({
  padding: {
    size: 6,
    direction: ['top', 'bottom']
  }
}), {
  display: 'block'
});

// tracking https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/objects/_width-container.scss
const WidthContainer = styled__default["default"]('div').withConfig({
  displayName: "width-container__WidthContainer",
  componentId: "sc-paw03d-0"
})({
  maxWidth: constants.SITE_WIDTH,
  margin: `0 ${constants.GUTTER_HALF}`,
  [constants.MEDIA_QUERIES.TABLET]: {
    margin: `0 ${constants.GUTTER}`
  },
  [constants.MEDIA_QUERIES.MAX]: {
    margin: '0 auto'
  }
}, lib.spacing.withWhiteSpace());

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
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement(SkipLink__default["default"], {
    href: `#${id}`
  }), header, /*#__PURE__*/React__namespace.createElement(Container, null, beforeChildren, /*#__PURE__*/React__namespace.createElement(MainComponent, {
    id: id
  }, children)), footer);
};
Page.Main = Main;
Page.WidthContainer = WidthContainer;
Page.defaultProps = {
  children: undefined,
  id: 'content',
  header: /*#__PURE__*/React__namespace.createElement(TopNav__default["default"], null),
  footer: undefined,
  main: Page.Main,
  beforeChildren: undefined,
  container: Page.WidthContainer
};
Page.displayName = 'Page';

exports.Page = Page;
exports["default"] = Page;
