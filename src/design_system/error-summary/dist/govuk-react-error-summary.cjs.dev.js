'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var govukColours = require('govuk-colours');
var heading = require('@govuk-react/heading');
var Paragraph = require('@govuk-react/paragraph');
var UnorderedList = require('@govuk-react/unordered-list');
var Link = require('@govuk-react/link');
var ListItem = require('@govuk-react/list-item');
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
var Paragraph__default = /*#__PURE__*/_interopDefault(Paragraph);
var UnorderedList__default = /*#__PURE__*/_interopDefault(UnorderedList);
var Link__default = /*#__PURE__*/_interopDefault(Link);
var ListItem__default = /*#__PURE__*/_interopDefault(ListItem);

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

const StyledErrorText = styled__default["default"](Link__default["default"]).withConfig({
  displayName: "src__StyledErrorText",
  componentId: "sc-6d0w2-0"
})({
  fontFamily: constants.NTA_LIGHT,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  fontWeight: 700,
  marginBottom: constants.SPACING.SCALE_1,
  textDecoration: 'underline',
  textDecorationSkipInk: 'none',
  textTransform: 'none',
  cursor: 'pointer',
  fontSize: constants.FONT_SIZE.SIZE_16,
  lineHeight: constants.LINE_HEIGHT.SIZE_16,
  ':visited': {
    color: `${govukColours.ERROR_COLOUR}`
  },
  [constants.MEDIA_QUERIES.LARGESCREEN]: {
    fontSize: constants.FONT_SIZE.SIZE_19,
    lineHeight: constants.LINE_HEIGHT.SIZE_19
  },
  color: `${govukColours.ERROR_COLOUR}`,
  paddingTop: '4px',
  paddingBottom: '2px'
});
const StyledErrorSummary = styled__default["default"]('div').withConfig({
  displayName: "src__StyledErrorSummary",
  componentId: "sc-6d0w2-1"
})({
  color: govukColours.TEXT_COLOUR,
  padding: constants.RESPONSIVE_4.mobile,
  border: `${constants.BORDER_WIDTH_MOBILE} solid ${govukColours.ERROR_COLOUR}`,
  '&:focus': {
    outline: `${constants.FOCUS_WIDTH} solid ${govukColours.FOCUS_COLOUR}`,
    outlineOffset: '0'
  },
  [constants.MEDIA_QUERIES.LARGESCREEN]: {
    padding: constants.RESPONSIVE_4.tablet,
    border: `${constants.BORDER_WIDTH} solid ${govukColours.ERROR_COLOUR}`
  }
}, lib.spacing.withWhiteSpace({
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
    heading: heading$1 = 'There is a problem',
    description = undefined,
    errors = [],
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement(StyledErrorSummary, _extends({
    tabIndex: -1
  }, props), /*#__PURE__*/React__namespace.createElement(heading.H2, {
    size: "MEDIUM"
  }, heading$1), description && /*#__PURE__*/React__namespace.createElement(Paragraph__default["default"], {
    mb: 3
  }, description), errors.length > 0 && /*#__PURE__*/React__namespace.createElement(UnorderedList__default["default"], {
    mb: 0,
    listStyleType: "none"
  }, errors.map((error, index) => /*#__PURE__*/React__namespace.createElement(ListItem__default["default"], {
    key: error.targetName
  }, /*#__PURE__*/React__namespace.createElement(StyledErrorText, {
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

exports.ErrorSummary = ErrorSummary;
exports["default"] = ErrorSummary;
