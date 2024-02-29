'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styled = require('styled-components');
var constants = require('@govuk-react/constants');
var lib = require('@govuk-react/lib');
var ListItem = require('@govuk-react/list-item');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefault(styled);
var ListItem__default = /*#__PURE__*/_interopDefault(ListItem);

/**
 * ### References
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/core/_lists.scss
 */
function translateType(type) {
  return {
    bullet: 'disc',
    number: 'decimal'
  }[type] || type;
}
/**
 * Use lists to make blocks of text easier to read, and to break information into manageable chunks.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/ordered-list
 * - https://design-system.service.gov.uk/styles/typography/#lists
 */
const OrderedList = styled__default["default"]('ol').withConfig({
  displayName: "src__OrderedList",
  componentId: "sc-1392v8j-0"
})(lib.typography.font({
  size: 19
}), lib.typography.textColour, {
  marginTop: 0,
  '& &': {
    marginTop: constants.SPACING_POINTS[2]
  }
}, lib.spacing.withWhiteSpace({
  margin: {
    size: 4,
    direction: 'bottom'
  }
}), _ref => {
  let {
    listStyleType
  } = _ref;
  const type = translateType(listStyleType);
  return [{
    listStyleType: type
  }, type === 'none' ? {
    paddingLeft: 0
  } : {
    paddingLeft: constants.SPACING_POINTS[4]
  },
  // the inclusion of these means that withWhiteSpace's mb prop doesn't work on ListItem
  ['disc', 'decimal'].includes(type) ? {
    [`> ${ListItem__default["default"]}`]: {
      marginBottom: 0,
      [constants.MEDIA_QUERIES.TABLET]: {
        marginBottom: constants.SPACING_POINTS[1]
      }
    }
  } : {
    // Style when not disc/decimal
    [`> ${ListItem__default["default"]}`]: {
      marginBottom: constants.SPACING_POINTS[1]
    }
  }];
});
OrderedList.defaultProps = {
  listStyleType: undefined
};
OrderedList.displayName = 'OrderedList';

exports.OrderedList = OrderedList;
exports["default"] = OrderedList;
