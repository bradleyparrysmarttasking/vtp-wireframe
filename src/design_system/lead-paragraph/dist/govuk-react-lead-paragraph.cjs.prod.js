'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styled = require('styled-components');
var lib = require('@govuk-react/lib');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefault(styled);

/**
 * A lead paragraph is an introductory paragraph that you can use at the top of a page to summarise the content.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/lead-paragraph
 * - https://design-system.service.gov.uk/styles/typography/#lead-paragraph
 */
const LeadParagraph = styled__default["default"]('p').withConfig({
  displayName: "src__LeadParagraph",
  componentId: "sc-1bvfkuk-0"
})(lib.typography.textColour, lib.typography.font({
  size: 24
}), {
  marginTop: 0
}, lib.spacing.withWhiteSpace({
  marginBottom: 6
}));
LeadParagraph.displayName = 'LeadParagraph';

exports.LeadParagraph = LeadParagraph;
exports["default"] = LeadParagraph;