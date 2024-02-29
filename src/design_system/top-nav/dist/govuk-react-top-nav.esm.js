import * as React from 'react';
import React__default, { Component } from 'react';
import { BLUE, PROPOSITION_BORDER, WHITE, YELLOW, BLACK } from 'govuk-colours';
import { NTA_LIGHT, FONT_SIZE, LINE_HEIGHT, MEDIA_QUERIES, SPACING } from '@govuk-react/constants';
import { typography } from '@govuk-react/lib';
import CrownIcon from '@govuk-react/icon-crown';
import styled from 'styled-components';

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

const TopNavWrapper = styled('div').withConfig({
  displayName: "top-nav-wrapper__TopNavWrapper",
  componentId: "sc-1wnrl5k-0"
})(_ref => {
  let {
    bgColor,
    color
  } = _ref;
  return {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: bgColor,
    color,
    fontFamily: NTA_LIGHT,
    fontWeight: 400,
    fontSize: FONT_SIZE.SIZE_14,
    lineHeight: LINE_HEIGHT.SIZE_14,
    [MEDIA_QUERIES.LARGESCREEN]: {
      fontSize: FONT_SIZE.SIZE_16,
      lineHeight: LINE_HEIGHT.SIZE_16
    }
  };
});

const TopNavInner = styled('div').withConfig({
  displayName: "top-nav-inner__TopNavInner",
  componentId: "sc-15yph1v-0"
})({
  display: 'flex',
  flexDirection: 'column',
  width: `calc(100% - ${SPACING.SCALE_5})`,
  maxWidth: '960px',
  padding: `calc(${SPACING.SCALE_2} * 0.8) ${SPACING.SCALE_3}`,
  boxSizing: 'border-box',
  [MEDIA_QUERIES.LARGESCREEN]: {
    padding: `calc(${SPACING.SCALE_2} * 0.8) 0`,
    flexDirection: 'row',
    width: `calc(100% - ${SPACING.SCALE_6})`
  }
});

const BottomNavWrapper = styled('div').withConfig({
  displayName: "bottom-nav-wrapper__BottomNavWrapper",
  componentId: "sc-1334g24-0"
})({
  borderBottom: `10px solid ${BLUE}`,
  maxWidth: '960px',
  margin: '0 auto',
  width: `calc(100% - ${SPACING.SCALE_5})`,
  [MEDIA_QUERIES.LARGESCREEN]: {
    width: `calc(100% - ${SPACING.SCALE_6})`
  }
});

const Company = styled('div').withConfig({
  displayName: "company__Company",
  componentId: "sc-fxukuq-0"
})({
  display: 'flex',
  fontWeight: 800,
  alignItems: 'center',
  justifyContent: 'flex-start',
  fontSize: '30px'
});

const LogoSearchWrapper = styled('div').withConfig({
  displayName: "logo-search-wrapper__LogoSearchWrapper",
  componentId: "sc-1iq7ssu-0"
})({
  display: 'flex',
  justifyContent: 'space-between',
  [MEDIA_QUERIES.LARGESCREEN]: {
    display: 'block',
    paddingRight: SPACING.SCALE_3,
    width: '33.33%'
  }
});

const RightHandSide = styled('div').withConfig({
  displayName: "right-hand-side__RightHandSide",
  componentId: "sc-1c11aed-0"
})({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  marginTop: SPACING.SCALE_2,
  [MEDIA_QUERIES.LARGESCREEN]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '66.66%',
    paddingLeft: SPACING.SCALE_3,
    marginTop: 0
  }
});

const SearchWrapper = styled('div').withConfig({
  displayName: "search-wrapper__SearchWrapper",
  componentId: "sc-on0jnt-0"
})({
  marginTop: SPACING.SCALE_1,
  width: '50%',
  minWidth: '110px',
  [MEDIA_QUERIES.LARGESCREEN]: {
    width: '100%'
  }
});

const Ul = styled('ul').withConfig({
  shouldForwardProp: prop => !['serviceTitle', 'open'].includes(String(prop)),
  displayName: "unordered-list__Ul",
  componentId: "sc-otbf2p-0"
})(_ref => {
  let {
    serviceTitle,
    open
  } = _ref;
  return {
    display: open ? 'flex' : 'none',
    flexWrap: 'wrap',
    margin: 0,
    padding: 0,
    marginTop: SPACING.SCALE_1,
    width: '100%',
    [MEDIA_QUERIES.LARGESCREEN]: {
      display: 'flex',
      paddingTop: serviceTitle ? 0 : SPACING.SCALE_5,
      width: 'auto'
    }
  };
});

const Li = styled('li').withConfig({
  displayName: "list-item__Li",
  componentId: "sc-1kicpn1-0"
})({
  flex: '1 0 50%',
  width: '100%',
  listStyleType: 'none',
  margin: 0,
  padding: '3px 0',
  borderBottom: `1px solid ${PROPOSITION_BORDER}`,
  [MEDIA_QUERIES.LARGESCREEN]: {
    borderBottom: 0,
    flex: 'none',
    width: 'auto',
    paddingRight: SPACING.SCALE_3
  }
});

// Label to be linked to checkbox in parent component
// in order to provide toggle function of mobile menu
// when javascript is not present.
const Button = styled('label').withConfig({
  displayName: "menu-button__Button",
  componentId: "sc-1yd67mz-0"
})({
  display: 'flex',
  alignItems: 'center',
  [MEDIA_QUERIES.LARGESCREEN]: {
    display: 'none'
  }
});
const ButtonText = styled('div').withConfig({
  displayName: "menu-button__ButtonText",
  componentId: "sc-1yd67mz-1"
})({
  cursor: 'default',
  ':hover': {
    textDecoration: 'underline'
  }
});
const ButtonIcon = styled('div').withConfig({
  displayName: "menu-button__ButtonIcon",
  componentId: "sc-1yd67mz-2"
})(_ref => {
  let {
    open
  } = _ref;
  return {
    content: '""',
    display: 'inline-block',
    width: '0',
    height: '0',
    borderStyle: 'solid',
    borderColor: 'transparent',
    clipPath: open ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'polygon(0% 0%, 50% 100%, 100% 0%)',
    borderWidth: open ? '0 5px 8.66px 5px' : '8.66px 5px 0 5px',
    marginLeft: '5px',
    borderTopColor: 'inherit',
    borderBottomColor: 'inherit'
  };
});
const MenuButton = _ref2 => {
  let {
    title,
    open,
    onClick
  } = _ref2;
  return /*#__PURE__*/React__default.createElement(Button, {
    onClick: onClick,
    htmlFor: "govuk-react-menu-button"
  }, /*#__PURE__*/React__default.createElement(ButtonText, null, title), /*#__PURE__*/React__default.createElement(ButtonIcon, {
    open: open
  }));
};
MenuButton.defaultProps = {
  title: 'Menu',
  open: false,
  onClick: () => null
};

const Container = styled('div').withConfig({
  displayName: "icon-title__Container",
  componentId: "sc-onvli0-0"
})({
  verticalAlign: 'baseline'
});
const IconContainer = styled('span').withConfig({
  displayName: "icon-title__IconContainer",
  componentId: "sc-onvli0-1"
})({
  width: '36px',
  maxHeight: '27px',
  display: 'inline-block',
  marginRight: '7px'
});
const TitleContainer = styled('span').withConfig({
  displayName: "icon-title__TitleContainer",
  componentId: "sc-onvli0-2"
})({
  display: 'inline-block',
  fontWeight: 700
});
const IconTitle = _ref => {
  let {
    icon,
    children
  } = _ref;
  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(IconContainer, null, icon), /*#__PURE__*/React.createElement(TitleContainer, null, children));
};
IconTitle.defaultProps = {
  icon: undefined,
  children: undefined
};
IconTitle.displayName = 'TopNav.IconTitle';

const TopNavAnchor = styled('a').withConfig({
  displayName: "top-nav-anchor__TopNavAnchor",
  componentId: "sc-lt39h5-0"
})({
  color: WHITE,
  textDecoration: 'none',
  textDecorationSkipInk: 'none',
  borderBottom: '1px solid transparent',
  fontWeight: 700,
  lineHeight: 1,
  ':hover': {
    borderBottomColor: WHITE
  },
  ':focus': {
    outline: `3px solid ${YELLOW}`
  }
});
TopNavAnchor.displayName = 'TopNav.Anchor';

const NavLinkAnchor = styled(TopNavAnchor).withConfig({
  displayName: "nav-link-anchor__NavLinkAnchor",
  componentId: "sc-1pr115z-0"
})({
  display: 'inline-block',
  ':focus': {
    color: BLACK,
    backgroundColor: YELLOW,
    outline: `3px solid ${YELLOW}`,
    ':hover': {
      borderBottomColor: BLACK
    }
  }
});
NavLinkAnchor.displayName = 'TopNav.NavLink';

// Layout/position of ServiceTitle
const ServiceTitleWrapper = styled('div').withConfig({
  displayName: "src__ServiceTitleWrapper",
  componentId: "sc-140rlix-0"
})(typography.font({
  size: 24
}), {
  width: '50%',
  [MEDIA_QUERIES.LARGESCREEN]: {
    width: 'auto'
  }
});

// Layout/position of MenuButtonWrapper
const MenuButtonWrapper = styled('div').withConfig({
  displayName: "src__MenuButtonWrapper",
  componentId: "sc-140rlix-1"
})({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  width: '50%',
  [MEDIA_QUERIES.LARGESCREEN]: {
    width: 'auto'
  }
});

// Provides a fallback for the mobile menu toggle
// functionality when javascrcipt is unavailable
const Input = styled('input').withConfig({
  displayName: "src__Input",
  componentId: "sc-140rlix-2"
})({
  position: 'absolute',
  top: '-999em',
  ':checked + ul': {
    display: 'flex'
  },
  [MEDIA_QUERIES.LARGESCREEN]: {
    display: 'none'
  }
});
/**
 * The GOV.UK header shows users that they are on GOV.UK and which service they are using.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/top-nav
 * - https://design-system.service.gov.uk/components/header/
 */
class TopNav extends Component {
  static IconTitle = IconTitle;
  static Anchor = TopNavAnchor;
  static NavLink = NavLinkAnchor;
  static displayName = 'TopNav';
  static defaultProps = {
    bgColor: BLACK,
    color: WHITE,
    company: /*#__PURE__*/React__default.createElement(IconTitle, {
      icon: /*#__PURE__*/React__default.createElement(CrownIcon, {
        width: "36",
        height: "32"
      })
    }, "GOV.UK"),
    serviceTitle: undefined,
    search: false,
    children: undefined,
    defaultOpen: false
  };
  constructor(props) {
    super(props);
    const {
      defaultOpen
    } = this.props;
    this.state = {
      navigationOpen: defaultOpen
    };
  }
  toggleNavigationOpen = () => {
    this.setState(prevState => ({
      navigationOpen: !prevState.navigationOpen
    }));
  };
  render() {
    const {
      bgColor,
      color,
      company,
      serviceTitle,
      search,
      children,
      ...props
    } = this.props;
    const {
      navigationOpen
    } = this.state;
    return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(TopNavWrapper, _extends({
      bgColor: bgColor,
      color: color
    }, props), /*#__PURE__*/React__default.createElement(TopNavInner, null, /*#__PURE__*/React__default.createElement(LogoSearchWrapper, null, /*#__PURE__*/React__default.createElement(Company, null, company), search && /*#__PURE__*/React__default.createElement(SearchWrapper, null, search)), /*#__PURE__*/React__default.createElement(RightHandSide, null, /*#__PURE__*/React__default.createElement(ServiceTitleWrapper, null, serviceTitle), children && /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(MenuButtonWrapper, null, /*#__PURE__*/React__default.createElement(MenuButton, {
      open: navigationOpen
    })), /*#__PURE__*/React__default.createElement(Input, {
      id: "govuk-react-menu-button",
      type: "checkbox",
      checked: navigationOpen,
      onChange: this.toggleNavigationOpen
    }), /*#__PURE__*/React__default.createElement(Ul, {
      id: "govuk-react-menu",
      serviceTitle: !!serviceTitle,
      open: navigationOpen
    }, Array.isArray(children) ? React__default.Children.map(children, child => child ? /*#__PURE__*/React__default.createElement(Li, null, child) : null) : /*#__PURE__*/React__default.createElement(Li, null, children)))))), /*#__PURE__*/React__default.createElement(BottomNavWrapper, null));
  }
}

export { TopNav, TopNav as default };
