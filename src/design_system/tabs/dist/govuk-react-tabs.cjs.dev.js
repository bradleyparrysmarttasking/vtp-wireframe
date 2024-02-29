'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var lib = require('@govuk-react/lib');
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

const TabList = styled__default["default"]('ul').withConfig({
  displayName: "list__TabList",
  componentId: "sc-srtuwr-0"
})({
  margin: 0
}, lib.spacing.responsive({
  size: 6,
  property: 'margin',
  direction: 'bottom'
}), {
  padding: 0,
  listStyle: 'none',
  [constants.MEDIA_QUERIES.TABLET]: {
    borderBottom: `1px solid ${govukColours.BORDER_COLOUR}`,
    marginBottom: 0,
    '::after': {
      content: "''",
      display: 'block',
      clear: 'both'
    }
  }
});

const TabPanel = styled__default["default"]('section').withConfig({
  displayName: "panel__TabPanel",
  componentId: "sc-1c8lkp4-0"
})(lib.spacing.responsiveMargin({
  size: 8,
  direction: 'bottom'
}), {
  [constants.MEDIA_QUERIES.TABLET]: {
    marginBottom: lib.spacing.simple(0),
    paddingTop: lib.spacing.simple(6),
    paddingRight: lib.spacing.simple(4),
    paddingBottom: lib.spacing.simple(6),
    paddingLeft: lib.spacing.simple(4),
    border: `1px solid ${govukColours.BORDER_COLOUR}`,
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
    [constants.MEDIA_QUERIES.TABLET]: {
      display: !selected && 'none'
    }
  };
});

const spacingSimple1 = lib.spacing.simple(1);
const spacingSimple2 = lib.spacing.simple(2);
const spacingSimple3 = lib.spacing.simple(3);
const spacingSimple4 = lib.spacing.simple(4);
const spacingSimple5 = lib.spacing.simple(5);
const StyledListItem = styled__default["default"]('li').withConfig({
  displayName: "tab__StyledListItem",
  componentId: "sc-1e33m29-0"
})({
  marginLeft: spacingSimple5,
  ':before': {
    content: "'\\2014  '",
    marginLeft: -spacingSimple5,
    paddingRight: spacingSimple1
  },
  [constants.MEDIA_QUERIES.TABLET]: {
    marginLeft: 0,
    ':before': {
      content: 'none'
    }
  }
});
const StyledHyperLink = styled__default["default"]('a').withConfig({
  displayName: "tab__StyledHyperLink",
  componentId: "sc-1e33m29-1"
})(lib.typography.font({
  size: 19
}), lib.link.common(), lib.link.styleDefault, {
  display: 'inline-block',
  paddingTop: spacingSimple2,
  paddingBottom: spacingSimple2
}, _ref => {
  let {
    selected
  } = _ref;
  return {
    color: selected && govukColours.BLACK,
    textDecoration: selected ? 'none' : undefined,
    [constants.MEDIA_QUERIES.TABLET]: {
      marginRight: spacingSimple1,
      float: 'left',
      textAlign: 'center',
      textDecoration: 'none',
      color: govukColours.BLACK,
      ':link,:visited': {
        color: govukColours.BLACK
      },
      marginTop: selected ? -spacingSimple1 : undefined,
      marginBottom: selected ? -1 : undefined,
      paddingTop: selected ? spacingSimple3 - 1 : undefined,
      paddingRight: selected ? spacingSimple4 - 1 : spacingSimple4,
      paddingBottom: selected ? spacingSimple3 + 1 : undefined,
      paddingLeft: selected ? spacingSimple4 - 1 : spacingSimple4,
      border: selected && `1px solid ${govukColours.BORDER_COLOUR}`,
      borderBottom: selected ? 0 : 1,
      backgroundColor: selected ? govukColours.WHITE : govukColours.GREY_4,
      ':focus': {
        backgroundColor: selected ? 'transparent' : govukColours.GREY_4
      }
    }
  };
});
const Tab = props => /*#__PURE__*/React__namespace.createElement(StyledListItem, null, /*#__PURE__*/React__namespace.createElement(StyledHyperLink, props));
Tab.defaultProps = {
  selected: false
};

const TabsTitle = styled__default["default"]('h2').withConfig({
  displayName: "title__TabsTitle",
  componentId: "sc-5azs4d-0"
})(lib.typography.font({
  size: 19
}), {
  marginBottom: lib.spacing.simple(1),
  [constants.MEDIA_QUERIES.TABLET]: {
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
const TabsContainer = styled__default["default"]('div').withConfig({
  displayName: "src__TabsContainer",
  componentId: "sc-k251l1-0"
})(lib.typography.font({
  size: 19
}), lib.typography.textColour, lib.spacing.responsiveMargin({
  size: 1,
  direction: 'top'
}), lib.spacing.responsiveMargin({
  size: 6,
  direction: 'bottom'
}), lib.spacing.withWhiteSpace());

/**
 * The tabs component lets users navigate between related sections of content, displaying one section at a time.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/tabs
 * - https://design-system.service.gov.uk/components/tabs/
 */
const Tabs = props => /*#__PURE__*/React__namespace.createElement(TabsContainer, props);
Tabs.displayName = 'Tabs';
Tabs.Tab = Tab;
Tabs.List = TabList;
Tabs.Panel = TabPanel;
Tabs.Title = TabsTitle;

exports.List = TabList;
exports.Panel = TabPanel;
exports.Tab = Tab;
exports.Tabs = Tabs;
exports.Title = TabsTitle;
exports["default"] = Tabs;