'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var constants = require('@govuk-react/constants');
var lib = require('@govuk-react/lib');
var govukColours = require('govuk-colours');
var icons = require('@govuk-react/icons');

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

const PaginationWrapper = styled__default["default"]('li').withConfig({
  displayName: "anchor__PaginationWrapper",
  componentId: "sc-2udijf-0"
})({
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
  listStyleType: 'none',
  fontFamily: constants.NTA_LIGHT,
  fontWeight: 400,
  textTransform: 'none',
  fontSize: constants.FONT_SIZE.SIZE_20,
  lineHeight: constants.LINE_HEIGHT.SIZE_16,
  width: '100%',
  [constants.MEDIA_QUERIES.LARGESCREEN]: {
    fontSize: constants.FONT_SIZE.SIZE_27,
    lineHeight: constants.LINE_HEIGHT.SIZE_16
  },
  '> a': {
    boxSizing: 'border-box',
    color: govukColours.BLUE,
    fill: 'currentColor',
    padding: constants.SPACING.SCALE_3,
    backgroundColor: govukColours.WHITE,
    textDecoration: 'none',
    outlineColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    ':hover': {
      backgroundColor: govukColours.GREY_4
    },
    ':focus': {
      outline: `3px solid ${govukColours.YELLOW}`
    },
    ':visited': {
      color: govukColours.PURPLE
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
const InnerWrap = styled__default["default"]('div').withConfig({
  displayName: "anchor__InnerWrap",
  componentId: "sc-2udijf-1"
})({
  display: 'flex',
  alignItems: 'center',
  width: '100%'
});
const PageTitle = styled__default["default"]('span').withConfig({
  displayName: "anchor__PageTitle",
  componentId: "sc-2udijf-2"
})({
  fontSize: constants.FONT_SIZE.SIZE_14,
  lineHeight: constants.LINE_HEIGHT.SIZE_14,
  textDecoration: 'underline',
  [constants.MEDIA_QUERIES.LARGESCREEN]: {
    fontSize: constants.FONT_SIZE.SIZE_16,
    lineHeight: constants.LINE_HEIGHT.SIZE_16
  }
});
const Anchor = styled__default["default"]('a').withConfig({
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
  return /*#__PURE__*/React__namespace.createElement(PaginationWrapper, {
    previousPage: previousPage,
    nextPage: nextPage
  }, /*#__PURE__*/React__namespace.createElement(Anchor, props, /*#__PURE__*/React__namespace.createElement(InnerWrap, null, previousPage && /*#__PURE__*/React__namespace.createElement(icons.ArrowLeft, null), children, nextPage && /*#__PURE__*/React__namespace.createElement(icons.ArrowRight, null)), pageTitle && /*#__PURE__*/React__namespace.createElement(PageTitle, null, pageTitle)));
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
const StyledList = styled__default["default"]('ul').withConfig({
  displayName: "src__StyledList",
  componentId: "sc-elluw3-0"
})(lib.typography.font({
  size: 19
}), {
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  marginTop: constants.SPACING_POINTS[5],
  padding: constants.SPACING_POINTS[2],
  justifyContent: 'space-between',
  width: '100%',
  [constants.MEDIA_QUERIES.LARGESCREEN]: {
    flexDirection: 'row'
  }
}, lib.spacing.withWhiteSpace({
  marginBottom: 6
}));

/**
 * Navigational links that allow users to navigate within a series of pages or elements.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/pagination
 * - https://components.publishing.service.gov.uk/component-guide/previous_and_next_navigation
 *
 */
const Pagination = props => /*#__PURE__*/React__namespace.createElement(StyledList, props);
Pagination.displayName = 'Pagination';
Pagination.Anchor = PaginationAnchor;

exports.Pagination = Pagination;
exports["default"] = Pagination;
