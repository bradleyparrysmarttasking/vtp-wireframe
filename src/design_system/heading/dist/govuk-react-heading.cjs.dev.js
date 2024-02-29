'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styled = require('styled-components');
var React = require('react');
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

var styled__default = /*#__PURE__*/_interopDefault(styled);
var React__namespace = /*#__PURE__*/_interopNamespace(React);

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

// use `size` only with string for XLARGE, SMALL etc and number for px size
// so if `size` is a string, we find a numeric size based off `HEADING_SIZES`
// but if `size` is a number we just send through that number

const StyledHeading = styled__default["default"]('h1').withConfig({
  displayName: "heading__StyledHeading",
  componentId: "sc-1dsobun-0"
})(lib.typography.textColour, _ref => {
  let {
    size
  } = _ref;
  const actualSize = Number.isNaN(Number(size)) ? constants.HEADING_SIZES[size] : size;
  if (!actualSize) {
    throw Error(`Unknown size ${size} used for heading.`);
  }
  return {
    ...lib.typography.font({
      size: actualSize,
      weight: 'bold'
    })
  };
}, {
  display: 'block',
  marginTop: 0
}, _ref2 => {
  let {
    size
  } = _ref2;
  const actualSize = Number.isNaN(Number(size)) ? constants.HEADING_SIZES[size] : size;
  const scaleInfo = constants.TYPOGRAPHY_SCALE[actualSize];
  return {
    marginBottom: scaleInfo.mobile.spacing,
    [constants.MEDIA_QUERIES.TABLET]: {
      marginBottom: scaleInfo.tablet.spacing
    }
  };
}, lib.spacing.withWhiteSpace());

/**
 * Use heading tags, such as `<h1>`, `<h2>` and so on, to tag the headings on a page.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/heading
 * - https://design-system.service.gov.uk/styles/typography/#headings
 */
const Heading = _ref3 => {
  let {
    level,
    size,
    ...props
  } = _ref3;
  if (level) {
    // eslint-disable-next-line no-console
    console.warn(`deprecated prop 'level' used in Heading, please replace with an "H${level}" component`);
    if (constants.LEVEL_TAG[level]) {
      return /*#__PURE__*/React__namespace.createElement(StyledHeading, _extends({
        size: constants.LEVEL_SIZE[level]
      }, props, {
        as: constants.LEVEL_TAG[level]
      }));
    }
  }
  return /*#__PURE__*/React__namespace.createElement(StyledHeading, _extends({
    size: size
  }, props));
};
Heading.defaultProps = {
  level: undefined,
  size: 'XLARGE',
  children: undefined
};
Heading.displayName = 'Heading';

const H1 = props => /*#__PURE__*/React__namespace.createElement(Heading, _extends({
  as: "h1",
  size: constants.LEVEL_SIZE[1]
}, props));
const H2 = props => /*#__PURE__*/React__namespace.createElement(Heading, _extends({
  as: "h2",
  size: constants.LEVEL_SIZE[2]
}, props));
const H3 = props => /*#__PURE__*/React__namespace.createElement(Heading, _extends({
  as: "h3",
  size: constants.LEVEL_SIZE[3]
}, props));
const H4 = props => /*#__PURE__*/React__namespace.createElement(Heading, _extends({
  as: "h4",
  size: constants.LEVEL_SIZE[4]
}, props));
const H5 = props => /*#__PURE__*/React__namespace.createElement(Heading, _extends({
  as: "h5",
  size: constants.LEVEL_SIZE[5]
}, props));
const H6 = props => /*#__PURE__*/React__namespace.createElement(Heading, _extends({
  as: "h6",
  size: constants.LEVEL_SIZE[6]
}, props));

exports.H1 = H1;
exports.H2 = H2;
exports.H3 = H3;
exports.H4 = H4;
exports.H5 = H5;
exports.H6 = H6;
exports["default"] = Heading;
