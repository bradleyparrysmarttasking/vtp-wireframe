import * as React from 'react';
import styled from 'styled-components';
import { ERROR_COLOUR, TEXT_COLOUR, FOCUS_COLOUR } from 'govuk-colours';
import { H2 } from '@govuk-react/heading';
import Paragraph from '@govuk-react/paragraph';
import UnorderedList from '@govuk-react/unordered-list';
import Link from '@govuk-react/link';
import ListItem from '@govuk-react/list-item';
import { NTA_LIGHT, SPACING, FONT_SIZE, LINE_HEIGHT, MEDIA_QUERIES, RESPONSIVE_4, BORDER_WIDTH_MOBILE, FOCUS_WIDTH, BORDER_WIDTH } from '@govuk-react/constants';
import { spacing } from '@govuk-react/lib';

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

const StyledErrorText = styled(Link).withConfig({
  displayName: "src__StyledErrorText",
  componentId: "sc-6d0w2-0"
})({
  fontFamily: NTA_LIGHT,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  fontWeight: 700,
  marginBottom: SPACING.SCALE_1,
  textDecoration: 'underline',
  textDecorationSkipInk: 'none',
  textTransform: 'none',
  cursor: 'pointer',
  fontSize: FONT_SIZE.SIZE_16,
  lineHeight: LINE_HEIGHT.SIZE_16,
  ':visited': {
    color: `${ERROR_COLOUR}`
  },
  [MEDIA_QUERIES.LARGESCREEN]: {
    fontSize: FONT_SIZE.SIZE_19,
    lineHeight: LINE_HEIGHT.SIZE_19
  },
  color: `${ERROR_COLOUR}`,
  paddingTop: '4px',
  paddingBottom: '2px'
});
const StyledErrorSummary = styled('div').withConfig({
  displayName: "src__StyledErrorSummary",
  componentId: "sc-6d0w2-1"
})({
  color: TEXT_COLOUR,
  padding: RESPONSIVE_4.mobile,
  border: `${BORDER_WIDTH_MOBILE} solid ${ERROR_COLOUR}`,
  '&:focus': {
    outline: `${FOCUS_WIDTH} solid ${FOCUS_COLOUR}`,
    outlineOffset: '0'
  },
  [MEDIA_QUERIES.LARGESCREEN]: {
    padding: RESPONSIVE_4.tablet,
    border: `${BORDER_WIDTH} solid ${ERROR_COLOUR}`
  }
}, spacing.withWhiteSpace({
  marginBottom: 6
}));
/**
 * Use this component at the top of a page to summarise any errors a user has made.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/error-summary
 * - https://design-system.service.gov.uk/components/error-summary/
 */
const ErrorSummary = _ref => {
  let {
    onHandleErrorClick = undefined,
    heading = 'There is a problem',
    description = undefined,
    errors = [],
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(StyledErrorSummary, _extends({
    tabIndex: -1
  }, props), /*#__PURE__*/React.createElement(H2, {
    size: "MEDIUM"
  }, heading), description && /*#__PURE__*/React.createElement(Paragraph, {
    mb: 3
  }, description), errors.length > 0 && /*#__PURE__*/React.createElement(UnorderedList, {
    mb: 0,
    listStyleType: "none"
  }, errors.map((error, index) => /*#__PURE__*/React.createElement(ListItem, {
    key: error.targetName
  }, /*#__PURE__*/React.createElement(StyledErrorText, {
    tabIndex: 0,
    onClick: () => onHandleErrorClick?.(error.targetName)
  }, error.text)))));
};
ErrorSummary.defaultProps = {
  description: undefined,
  errors: [],
  heading: 'There is a problem',
  onHandleErrorClick: undefined
};
ErrorSummary.displayName = 'ErrorSummary';

export { ErrorSummary, ErrorSummary as default };
