import styled from 'styled-components';
import { SPACING_POINTS, MEDIA_QUERIES } from '@govuk-react/constants';
import { typography, spacing } from '@govuk-react/lib';
import ListItem from '@govuk-react/list-item';

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
const OrderedList = styled('ol').withConfig({
  displayName: "src__OrderedList",
  componentId: "sc-1392v8j-0"
})(typography.font({
  size: 19
}), typography.textColour, {
  marginTop: 0,
  '& &': {
    marginTop: SPACING_POINTS[2]
  }
}, spacing.withWhiteSpace({
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
    paddingLeft: SPACING_POINTS[4]
  },
  // the inclusion of these means that withWhiteSpace's mb prop doesn't work on ListItem
  ['disc', 'decimal'].includes(type) ? {
    [`> ${ListItem}`]: {
      marginBottom: 0,
      [MEDIA_QUERIES.TABLET]: {
        marginBottom: SPACING_POINTS[1]
      }
    }
  } : {
    // Style when not disc/decimal
    [`> ${ListItem}`]: {
      marginBottom: SPACING_POINTS[1]
    }
  }];
});
OrderedList.defaultProps = {
  listStyleType: undefined
};
OrderedList.displayName = 'OrderedList';

export { OrderedList, OrderedList as default };
