import * as React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { typography, spacing } from '@govuk-react/lib';
import Link from '@govuk-react/link';

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

const StyledParagraph = styled(ReactMarkdown).withConfig({
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
  return typography.font({
    size: supportingText ? 16 : 19
  });
}, spacing.withWhiteSpace({
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
  return /*#__PURE__*/React.createElement(StyledParagraph, _extends({
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
  linkRenderer: props => /*#__PURE__*/React.createElement(Link, props)
};
Paragraph.displayName = 'Paragraph';

export { Paragraph, Paragraph as default };
