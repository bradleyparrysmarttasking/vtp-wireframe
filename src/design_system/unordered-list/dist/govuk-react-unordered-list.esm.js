import * as React from 'react';
import OrderedList from '@govuk-react/ordered-list';

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

/**
 * Use lists to make blocks of text easier to read, and to break information into manageable chunks.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/ordered-list
 * - https://design-system.service.gov.uk/styles/typography/#lists
 */
const UnorderedList = props => /*#__PURE__*/React.createElement(OrderedList, _extends({
  as: "ul"
}, props));
UnorderedList.defaultProps = {
  listStyleType: undefined
};
UnorderedList.displayName = 'UnorderedList';

export { UnorderedList, UnorderedList as default };
