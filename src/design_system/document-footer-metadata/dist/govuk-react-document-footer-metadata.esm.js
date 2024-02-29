import * as React from 'react';
import styled from 'styled-components';
import UnorderedList from '@govuk-react/unordered-list';
import { NTA_LIGHT } from '@govuk-react/constants';
import { spacing } from '@govuk-react/lib';

/**
 * ### References:
 *
 * - https://components.publishing.service.gov.uk/component-guide/document_list
 * - https://github.com/alphagov/static/blob/077649737c43d3937f745df0b3adade9df3717dc/app/views/govuk_component/docs/metadata.yml
 * - https://github.com/alphagov/static/blob/077649737c43d3937f745df0b3adade9df3717dc/app/views/govuk_component/metadata.raw.html.erb
 */
const StyledContainer = styled('div').withConfig({
  displayName: "src__StyledContainer",
  componentId: "sc-1cttr5m-0"
})({
  fontFamily: NTA_LIGHT
}, spacing.withWhiteSpace());
const StyledDefinition = styled('li').withConfig({
  displayName: "src__StyledDefinition",
  componentId: "sc-1cttr5m-1"
})({
  fontSize: '24px',
  fontWeight: 700,
  lineHeight: 1.25,
  '> a': {
    textDecoration: 'none'
  }
});
const StyledParagraph = styled('p').withConfig({
  displayName: "src__StyledParagraph",
  componentId: "sc-1cttr5m-2"
})({
  marginBottom: 0
});

/**
 * An ordered list of documents including a document type, when updated and a link.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/document-footer-metadata
 * - https://components.publishing.service.gov.uk/component-guide/document_list
 */
const DocumentFooterMetadata = _ref => {
  let {
    from = undefined,
    partOf = undefined,
    other = undefined,
    ...props
  } = _ref;
  const fromData = /*#__PURE__*/React.createElement(StyledContainer, null, from && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StyledParagraph, null, "From:"), /*#__PURE__*/React.createElement(UnorderedList, {
    listStyleType: "none"
  }, from && from.map((child, i) =>
  /*#__PURE__*/
  /* eslint-disable react/no-array-index-key */
  React.createElement(StyledDefinition, {
    key: i
  }, child)
  /* eslint-enable react/no-array-index-key */))));

  const partOfData = /*#__PURE__*/React.createElement(StyledContainer, null, partOf && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StyledParagraph, null, "Part of:"), /*#__PURE__*/React.createElement(UnorderedList, {
    listStyleType: "none"
  }, Array.isArray(partOf) && React.Children.map(partOf, (child, i) => /*#__PURE__*/React.createElement(StyledDefinition, null, child)))));
  const otherData = /*#__PURE__*/React.createElement(StyledContainer, null, other && other.map(item => /*#__PURE__*/React.createElement("div", {
    key: item.id
  }, /*#__PURE__*/React.createElement(StyledParagraph, null, item.title, ":"), /*#__PURE__*/React.createElement(UnorderedList, {
    listStyleType: "none"
  }, /*#__PURE__*/React.createElement(StyledDefinition, null, item.content)))));
  return /*#__PURE__*/React.createElement(StyledContainer, props, fromData, partOfData, otherData);
};
DocumentFooterMetadata.defaultProps = {
  from: undefined,
  partOf: undefined,
  other: undefined
};
DocumentFooterMetadata.displayName = 'DocumentFooterMetadata';

export { DocumentFooterMetadata, DocumentFooterMetadata as default };
