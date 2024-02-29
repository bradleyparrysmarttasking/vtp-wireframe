import styled from 'styled-components';
import * as React from 'react';
import { HEADING_SIZES, TYPOGRAPHY_SCALE, MEDIA_QUERIES, LEVEL_TAG, LEVEL_SIZE } from '@govuk-react/constants';
import { typography, spacing } from '@govuk-react/lib';

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

const StyledHeading = styled('h1').withConfig({
  displayName: "heading__StyledHeading",
  componentId: "sc-1dsobun-0"
})(typography.textColour, _ref => {
  let {
    size
  } = _ref;
  const actualSize = Number.isNaN(Number(size)) ? HEADING_SIZES[size] : size;
  if (!actualSize) {
    throw Error(`Unknown size ${size} used for heading.`);
  }
  return {
    ...typography.font({
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
  const actualSize = Number.isNaN(Number(size)) ? HEADING_SIZES[size] : size;
  const scaleInfo = TYPOGRAPHY_SCALE[actualSize];
  return {
    marginBottom: scaleInfo.mobile.spacing,
    [MEDIA_QUERIES.TABLET]: {
      marginBottom: scaleInfo.tablet.spacing
    }
  };
}, spacing.withWhiteSpace());

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
    if (LEVEL_TAG[level]) {
      return /*#__PURE__*/React.createElement(StyledHeading, _extends({
        size: LEVEL_SIZE[level]
      }, props, {
        as: LEVEL_TAG[level]
      }));
    }
  }
  return /*#__PURE__*/React.createElement(StyledHeading, _extends({
    size: size
  }, props));
};
Heading.defaultProps = {
  level: undefined,
  size: 'XLARGE',
  children: undefined
};
Heading.displayName = 'Heading';

const H1 = props => /*#__PURE__*/React.createElement(Heading, _extends({
  as: "h1",
  size: LEVEL_SIZE[1]
}, props));
const H2 = props => /*#__PURE__*/React.createElement(Heading, _extends({
  as: "h2",
  size: LEVEL_SIZE[2]
}, props));
const H3 = props => /*#__PURE__*/React.createElement(Heading, _extends({
  as: "h3",
  size: LEVEL_SIZE[3]
}, props));
const H4 = props => /*#__PURE__*/React.createElement(Heading, _extends({
  as: "h4",
  size: LEVEL_SIZE[4]
}, props));
const H5 = props => /*#__PURE__*/React.createElement(Heading, _extends({
  as: "h5",
  size: LEVEL_SIZE[5]
}, props));
const H6 = props => /*#__PURE__*/React.createElement(Heading, _extends({
  as: "h6",
  size: LEVEL_SIZE[6]
}, props));

export { H1, H2, H3, H4, H5, H6, Heading as default };
