'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var ReactMarkdown = require('react-markdown');
var lib = require('@govuk-react/lib');
var Link = require('@govuk-react/link');

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
var ReactMarkdown__default = /*#__PURE__*/_interopDefault(ReactMarkdown);
var Link__default = /*#__PURE__*/_interopDefault(Link);

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

const StyledParagraph = styled__default["default"](ReactMarkdown__default["default"]).withConfig({
  displayName: "src__StyledParagraph",
  componentId: "sc-sgc9po-0"
})({
  margin: 0,
  '> p': {
    margin: 0
  },
  '> p > code': {
    padding: '0.2em 0.4em',
    margin: '0',
    fontSize: '85%',
    backgroundColor: 'rgba(27,31,35,0.05)',
    borderRadius: '3px'
  },
  '> pre': {
    padding: '16px',
    overflow: 'auto',
    fontSize: '85%',
    lineHeight: '1.45',
    backgroundColor: '#f6f8fa',
    borderRadius: '3px'
  },
  '> pre > code': {
    display: 'inline',
    padding: '0',
    margin: '0',
    border: '0',
    overflow: 'visible',
    lineHeight: 'inherit',
    wordWrap: 'normal'
  }
}, _ref => {
  let {
    supportingText
  } = _ref;
  return lib.typography.font({
    size: supportingText ? 16 : 19
  });
}, lib.spacing.withWhiteSpace({
  marginBottom: 4
}));

/**
 * Markdown Formatter.
 *
 * Supports bold, italic, links, inline code and block code in Markdown ONLY.
 * This is to ensure we follow GDS as closely as possible.
 * It is worth noting that GDS recommends avoiding bold and italics.
 *
 * Bold should be avoided in general as not only can it dilute the message, it will also
 * cause Screenreaders to increase the volume of any bold text to reflect the increase in
 * font-weight.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/paragraph
 * - https://design-system.service.gov.uk/styles/typography/
 */
const Paragraph = _ref2 => {
  let {
    children,
    ...props
  } = _ref2;
  return /*#__PURE__*/React__namespace.createElement(StyledParagraph, _extends({
    source: children,
    escapeHtml: false,
    skipHtml: true,
    allowedTypes: ['paragraph', 'emphasis', 'strong', 'link', 'inlineCode', 'code', 'text'],
    renderers: {
      link: props.linkRenderer
    }
  }, props));
};
Paragraph.defaultProps = {
  children: '',
  supportingText: false,
  linkRenderer: props => /*#__PURE__*/React__namespace.createElement(Link__default["default"], props)
};
Paragraph.displayName = 'Paragraph';

exports.Paragraph = Paragraph;
exports["default"] = Paragraph;