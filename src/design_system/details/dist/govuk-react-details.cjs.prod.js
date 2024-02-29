'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var lib = require('@govuk-react/lib');
var polished = require('polished');
var govukColours = require('govuk-colours');
var constants = require('@govuk-react/constants');

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

/**
 * ### References
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/details/_details.scss
 */
const CUSTOM_FOCUS_WIDTH = `${Number(polished.stripUnit(constants.FOCUS_WIDTH)) + 1}px`;
const StyledDetails = styled__default["default"]('details').withConfig({
  displayName: "src__StyledDetails",
  componentId: "sc-273hbe-0"
})(lib.typography.font({
  size: 19
}), lib.typography.textColour, lib.spacing.withWhiteSpace({
  marginBottom: 6
}), {
  display: 'block'
});
const StyledSummary = styled__default["default"]('summary').withConfig({
  displayName: "src__StyledSummary",
  componentId: "sc-273hbe-1"
})({
  display: 'inline-block',
  position: 'relative',
  marginBottom: constants.SPACING_POINTS[1],
  paddingLeft: Number(polished.stripUnit(constants.SPACING_POINTS[4])) + Number(polished.stripUnit(constants.BORDER_WIDTH)),
  color: govukColours.LINK_COLOUR,
  cursor: 'pointer',
  ':hover': {
    color: govukColours.LINK_HOVER_COLOUR
  },
  ':focus': {
    outline: `${CUSTOM_FOCUS_WIDTH} solid ${govukColours.FOCUS_COLOUR}`,
    outlineOffset: -1,
    color: govukColours.BLACK,
    background: govukColours.FOCUS_COLOUR
  },
  '::-webkit-details-marker': {
    display: 'none'
  },
  ':before': {
    content: '""',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    margin: 'auto',
    ...lib.shape.arrow({
      direction: 'right',
      base: 14
    }),
    '[open] > &': lib.shape.arrow({
      direction: 'down',
      base: 14
    })
  }
});
const SummaryText = styled__default["default"]('span').withConfig({
  displayName: "src__SummaryText",
  componentId: "sc-273hbe-2"
})({
  textDecoration: 'underline'
});
const DetailsText = styled__default["default"]('div').withConfig({
  displayName: "src__DetailsText",
  componentId: "sc-273hbe-3"
})({
  padding: constants.SPACING_POINTS[3],
  paddingLeft: constants.SPACING_POINTS[4],
  borderLeft: `${constants.BORDER_WIDTH} solid ${govukColours.BORDER_COLOUR}`,
  p: {
    marginTop: 0,
    marginBottom: constants.SPACING_POINTS[4]
  },
  '> :last-child, p:last-child': {
    marginBottom: 0
  }
});

/**
 * Make a page easier to scan by letting users reveal more detailed information only if they need it.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/details
 * - https://design-system.service.gov.uk/components/details/
 */
const Details = _ref => {
  let {
    summary,
    children,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement(StyledDetails, props, /*#__PURE__*/React__namespace.createElement(StyledSummary, null, /*#__PURE__*/React__namespace.createElement(SummaryText, null, summary)), /*#__PURE__*/React__namespace.createElement(DetailsText, null, children));
};
Details.defaultProps = {
  children: undefined,
  open: false
};
Details.displayName = 'Details';

exports.Details = Details;
exports["default"] = Details;
