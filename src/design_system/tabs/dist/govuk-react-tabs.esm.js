import * as React from 'react';
import styled from 'styled-components';
import { spacing, typography, link } from '@govuk-react/lib';
import { BORDER_COLOUR, BLACK, WHITE, GREY_4 } from 'govuk-colours';
import { MEDIA_QUERIES } from '@govuk-react/constants';

const TabList = styled('ul').withConfig({
  displayName: "list__TabList",
  componentId: "sc-srtuwr-0"
})({
  margin: 0
}, spacing.responsive({
  size: 6,
  property: 'margin',
  direction: 'bottom'
}), {
  padding: 0,
  listStyle: 'none',
  [MEDIA_QUERIES.TABLET]: {
    borderBottom: `1px solid ${BORDER_COLOUR}`,
    marginBottom: 0,
    '::after': {
      content: "''",
      display: 'block',
      clear: 'both'
    }
  }
});

const TabPanel = styled('section').withConfig({
  displayName: "panel__TabPanel",
  componentId: "sc-1c8lkp4-0"
})(spacing.responsiveMargin({
  size: 8,
  direction: 'bottom'
}), {
  [MEDIA_QUERIES.TABLET]: {
    marginBottom: spacing.simple(0),
    paddingTop: spacing.simple(6),
    paddingRight: spacing.simple(4),
    paddingBottom: spacing.simple(6),
    paddingLeft: spacing.simple(4),
    border: `1px solid ${BORDER_COLOUR}`,
    borderTop: 0,
    '& > :last-child': {
      marginBottom: 0
    }
  }
}, _ref => {
  let {
    selected
  } = _ref;
  return {
    display: 'block',
    [MEDIA_QUERIES.TABLET]: {
      display: !selected && 'none'
    }
  };
});

const spacingSimple1 = spacing.simple(1);
const spacingSimple2 = spacing.simple(2);
const spacingSimple3 = spacing.simple(3);
const spacingSimple4 = spacing.simple(4);
const spacingSimple5 = spacing.simple(5);
const StyledListItem = styled('li').withConfig({
  displayName: "tab__StyledListItem",
  componentId: "sc-1e33m29-0"
})({
  marginLeft: spacingSimple5,
  ':before': {
    content: "'\\2014  '",
    marginLeft: -spacingSimple5,
    paddingRight: spacingSimple1
  },
  [MEDIA_QUERIES.TABLET]: {
    marginLeft: 0,
    ':before': {
      content: 'none'
    }
  }
});
const StyledHyperLink = styled('a').withConfig({
  displayName: "tab__StyledHyperLink",
  componentId: "sc-1e33m29-1"
})(typography.font({
  size: 19
}), link.common(), link.styleDefault, {
  display: 'inline-block',
  paddingTop: spacingSimple2,
  paddingBottom: spacingSimple2
}, _ref => {
  let {
    selected
  } = _ref;
  return {
    color: selected && BLACK,
    textDecoration: selected ? 'none' : undefined,
    [MEDIA_QUERIES.TABLET]: {
      marginRight: spacingSimple1,
      float: 'left',
      textAlign: 'center',
      textDecoration: 'none',
      color: BLACK,
      ':link,:visited': {
        color: BLACK
      },
      marginTop: selected ? -spacingSimple1 : undefined,
      marginBottom: selected ? -1 : undefined,
      paddingTop: selected ? spacingSimple3 - 1 : undefined,
      paddingRight: selected ? spacingSimple4 - 1 : spacingSimple4,
      paddingBottom: selected ? spacingSimple3 + 1 : undefined,
      paddingLeft: selected ? spacingSimple4 - 1 : spacingSimple4,
      border: selected && `1px solid ${BORDER_COLOUR}`,
      borderBottom: selected ? 0 : 1,
      backgroundColor: selected ? WHITE : GREY_4,
      ':focus': {
        backgroundColor: selected ? 'transparent' : GREY_4
      }
    }
  };
});
const Tab = props => /*#__PURE__*/React.createElement(StyledListItem, null, /*#__PURE__*/React.createElement(StyledHyperLink, props));
Tab.defaultProps = {
  selected: false
};

const TabsTitle = styled('h2').withConfig({
  displayName: "title__TabsTitle",
  componentId: "sc-5azs4d-0"
})(typography.font({
  size: 19
}), {
  marginBottom: spacing.simple(1),
  [MEDIA_QUERIES.TABLET]: {
    display: 'none'
  }
});
TabsTitle.defaultProps = {
  children: 'Contents'
};

/**
 * ### References:
 *
 * - https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/tabs
 */
const TabsContainer = styled('div').withConfig({
  displayName: "src__TabsContainer",
  componentId: "sc-k251l1-0"
})(typography.font({
  size: 19
}), typography.textColour, spacing.responsiveMargin({
  size: 1,
  direction: 'top'
}), spacing.responsiveMargin({
  size: 6,
  direction: 'bottom'
}), spacing.withWhiteSpace());

/**
 * The tabs component lets users navigate between related sections of content, displaying one section at a time.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/tabs
 * - https://design-system.service.gov.uk/components/tabs/
 */
const Tabs = props => /*#__PURE__*/React.createElement(TabsContainer, props);
Tabs.displayName = 'Tabs';
Tabs.Tab = Tab;
Tabs.List = TabList;
Tabs.Panel = TabPanel;
Tabs.Title = TabsTitle;

export { TabList as List, TabPanel as Panel, Tab, Tabs, TabsTitle as Title, Tabs as default };
