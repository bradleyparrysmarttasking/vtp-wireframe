'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var UnorderedList = require('@govuk-react/unordered-list');
var constants = require('@govuk-react/constants');
var lib = require('@govuk-react/lib');

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
var styled__default = /*#__PURE__*/_interopDefault(styled);
var UnorderedList__default = /*#__PURE__*/_interopDefault(UnorderedList);

/**
 * ### References:
 *
 * - https://components.publishing.service.gov.uk/component-guide/document_list
 * - https://github.com/alphagov/static/blob/077649737c43d3937f745df0b3adade9df3717dc/app/views/govuk_component/docs/metadata.yml
 * - https://github.com/alphagov/static/blob/077649737c43d3937f745df0b3adade9df3717dc/app/views/govuk_component/metadata.raw.html.erb
 */
const StyledContainer = styled__default["default"]('div').withConfig({
  displayName: "src__StyledContainer",
  componentId: "sc-1cttr5m-0"
})({
  fontFamily: constants.NTA_LIGHT
}, lib.spacing.withWhiteSpace());
const StyledDefinition = styled__default["default"]('li').withConfig({
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
const StyledParagraph = styled__default["default"]('p').withConfig({
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
  const fromData = /*#__PURE__*/React__namespace.createElement(StyledContainer, null, from && /*#__PURE__*/React__namespace.createElement("div", null, /*#__PURE__*/React__namespace.createElement(StyledParagraph, null, "From:"), /*#__PURE__*/React__namespace.createElement(UnorderedList__default["default"], {
    listStyleType: "none"
  }, from && from.map((child, i) =>
  /*#__PURE__*/
  /* eslint-disable react/no-array-index-key */
  React__namespace.createElement(StyledDefinition, {
    key: i
  }, child)
  /* eslint-enable react/no-array-index-key */))));

  const partOfData = /*#__PURE__*/React__namespace.createElement(StyledContainer, null, partOf && /*#__PURE__*/React__namespace.createElement("div", null, /*#__PURE__*/React__namespace.createElement(StyledParagraph, null, "Part of:"), /*#__PURE__*/React__namespace.createElement(UnorderedList__default["default"], {
    listStyleType: "none"
  }, Array.isArray(partOf) && React__namespace.Children.map(partOf, (child, i) => /*#__PURE__*/React__namespace.createElement(StyledDefinition, null, child)))));
  const otherData = /*#__PURE__*/React__namespace.createElement(StyledContainer, null, other && other.map(item => /*#__PURE__*/React__namespace.createElement("div", {
    key: item.id
  }, /*#__PURE__*/React__namespace.createElement(StyledParagraph, null, item.title, ":"), /*#__PURE__*/React__namespace.createElement(UnorderedList__default["default"], {
    listStyleType: "none"
  }, /*#__PURE__*/React__namespace.createElement(StyledDefinition, null, item.content)))));
  return /*#__PURE__*/React__namespace.createElement(StyledContainer, props, fromData, partOfData, otherData);
};
DocumentFooterMetadata.defaultProps = {
  from: undefined,
  partOf: undefined,
  other: undefined
};
DocumentFooterMetadata.displayName = 'DocumentFooterMetadata';

exports.DocumentFooterMetadata = DocumentFooterMetadata;
exports["default"] = DocumentFooterMetadata;
