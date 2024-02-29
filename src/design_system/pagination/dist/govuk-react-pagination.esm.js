import * as React from 'react';
import styled from 'styled-components';
import { NTA_LIGHT, FONT_SIZE, LINE_HEIGHT, MEDIA_QUERIES, SPACING, SPACING_POINTS } from '@govuk-react/constants';
import { typography, spacing } from '@govuk-react/lib';
import { BLUE, WHITE, GREY_4, YELLOW, PURPLE } from 'govuk-colours';
import { ArrowLeft, ArrowRight } from '@govuk-react/icons';

const PaginationWrapper = styled('li').withConfig({
  displayName: "anchor__PaginationWrapper",
  componentId: "sc-2udijf-0"
})({
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
  listStyleType: 'none',
  fontFamily: NTA_LIGHT,
  fontWeight: 400,
  textTransform: 'none',
  fontSize: FONT_SIZE.SIZE_20,
  lineHeight: LINE_HEIGHT.SIZE_16,
  width: '100%',
  [MEDIA_QUERIES.LARGESCREEN]: {
    fontSize: FONT_SIZE.SIZE_27,
    lineHeight: LINE_HEIGHT.SIZE_16
  },
  '> a': {
    boxSizing: 'border-box',
    color: BLUE,
    fill: 'currentColor',
    padding: SPACING.SCALE_3,
    backgroundColor: WHITE,
    textDecoration: 'none',
    outlineColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    ':hover': {
      backgroundColor: GREY_4
    },
    ':focus': {
      outline: `3px solid ${YELLOW}`
    },
    ':visited': {
      color: PURPLE
    }
  }
}, _ref => {
  let {
    previousPage
  } = _ref;
  return {
    marginRight: previousPage ? '3px' : undefined,
    ' > a': {
      alignItems: previousPage ? 'flex-start' : undefined
    },
    ' > a div': {
      justifyContent: previousPage ? 'flex-start' : undefined,
      ' > svg': {
        height: previousPage ? '13px' : undefined,
        width: previousPage ? '17px' : undefined,
        marginRight: previousPage ? '10px' : undefined
      }
    }
  };
}, _ref2 => {
  let {
    nextPage
  } = _ref2;
  return {
    ' > a': {
      alignItems: nextPage ? 'flex-end' : undefined
    },
    ' > a div': {
      justifyContent: nextPage ? 'flex-end' : undefined,
      ' > svg': {
        height: nextPage ? '13px' : undefined,
        width: nextPage ? '17px' : undefined,
        marginLeft: nextPage ? '10px' : undefined
      }
    }
  };
});
const InnerWrap = styled('div').withConfig({
  displayName: "anchor__InnerWrap",
  componentId: "sc-2udijf-1"
})({
  display: 'flex',
  alignItems: 'center',
  width: '100%'
});
const PageTitle = styled('span').withConfig({
  displayName: "anchor__PageTitle",
  componentId: "sc-2udijf-2"
})({
  fontSize: FONT_SIZE.SIZE_14,
  lineHeight: LINE_HEIGHT.SIZE_14,
  textDecoration: 'underline',
  [MEDIA_QUERIES.LARGESCREEN]: {
    fontSize: FONT_SIZE.SIZE_16,
    lineHeight: LINE_HEIGHT.SIZE_16
  }
});
const Anchor = styled('a').withConfig({
  displayName: "anchor__Anchor",
  componentId: "sc-2udijf-3"
})({});
const PaginationAnchor = _ref3 => {
  let {
    previousPage,
    nextPage,
    children,
    pageTitle,
    ...props
  } = _ref3;
  return /*#__PURE__*/React.createElement(PaginationWrapper, {
    previousPage: previousPage,
    nextPage: nextPage
  }, /*#__PURE__*/React.createElement(Anchor, props, /*#__PURE__*/React.createElement(InnerWrap, null, previousPage && /*#__PURE__*/React.createElement(ArrowLeft, null), children, nextPage && /*#__PURE__*/React.createElement(ArrowRight, null)), pageTitle && /*#__PURE__*/React.createElement(PageTitle, null, pageTitle)));
};
PaginationAnchor.defaultProps = {
  previousPage: undefined,
  nextPage: undefined,
  pageTitle: undefined
};

/**
 * ### References:
 *
 * https://github.com/alphagov/static/blob/077649737c43d3937f745df0b3adade9df3717dc/app/views/govuk_component/docs/previous_and_next_navigation.yml
 * https://github.com/alphagov/govuk_publishing_components/blob/master/app/views/govuk_publishing_components/components/docs/previous_and_next_navigation.yml
 */
const StyledList = styled('ul').withConfig({
  displayName: "src__StyledList",
  componentId: "sc-elluw3-0"
})(typography.font({
  size: 19
}), {
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  marginTop: SPACING_POINTS[5],
  padding: SPACING_POINTS[2],
  justifyContent: 'space-between',
  width: '100%',
  [MEDIA_QUERIES.LARGESCREEN]: {
    flexDirection: 'row'
  }
}, spacing.withWhiteSpace({
  marginBottom: 6
}));

/**
 * Navigational links that allow users to navigate within a series of pages or elements.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/pagination
 * - https://components.publishing.service.gov.uk/component-guide/previous_and_next_navigation
 *
 */
const Pagination = props => /*#__PURE__*/React.createElement(StyledList, props);
Pagination.displayName = 'Pagination';
Pagination.Anchor = PaginationAnchor;

export { Pagination, Pagination as default };
