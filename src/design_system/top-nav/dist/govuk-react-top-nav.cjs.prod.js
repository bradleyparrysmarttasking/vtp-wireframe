'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var govukColours = require('govuk-colours');
var constants = require('@govuk-react/constants');
var lib = require('@govuk-react/lib');
var CrownIcon = require('@govuk-react/icon-crown');
var styled = require('styled-components');

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
var CrownIcon__default = /*#__PURE__*/_interopDefault(CrownIcon);
var styled__default = /*#__PURE__*/_interopDefault(styled);

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

const TopNavWrapper = styled__default["default"]('div').withConfig({
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
    fontFamily: constants.NTA_LIGHT,
    fontWeight: 400,
    fontSize: constants.FONT_SIZE.SIZE_14,
    lineHeight: constants.LINE_HEIGHT.SIZE_14,
    [constants.MEDIA_QUERIES.LARGESCREEN]: {
      fontSize: constants.FONT_SIZE.SIZE_16,
      lineHeight: constants.LINE_HEIGHT.SIZE_16
    }
  };
});

const TopNavInner = styled__default["default"]('div').withConfig({
  displayName: "top-nav-inner__TopNavInner",
  componentId: "sc-15yph1v-0"
})({
  display: 'flex',
  flexDirection: 'column',
  width: `calc(100% - ${constants.SPACING.SCALE_5})`,
  maxWidth: '960px',
  padding: `calc(${constants.SPACING.SCALE_2} * 0.8) ${constants.SPACING.SCALE_3}`,
  boxSizing: 'border-box',
  [constants.MEDIA_QUERIES.LARGESCREEN]: {
    padding: `calc(${constants.SPACING.SCALE_2} * 0.8) 0`,
    flexDirection: 'row',
    width: `calc(100% - ${constants.SPACING.SCALE_6})`
  }
});

const BottomNavWrapper = styled__default["default"]('div').withConfig({
  displayName: "bottom-nav-wrapper__BottomNavWrapper",
  componentId: "sc-1334g24-0"
})({
  borderBottom: `10px solid ${govukColours.BLUE}`,
  maxWidth: '960px',
  margin: '0 auto',
  width: `calc(100% - ${constants.SPACING.SCALE_5})`,
  [constants.MEDIA_QUERIES.LARGESCREEN]: {
    width: `calc(100% - ${constants.SPACING.SCALE_6})`
  }
});

const Company = styled__default["default"]('div').withConfig({
  displayName: "company__Company",
  componentId: "sc-fxukuq-0"
})({
  display: 'flex',
  fontWeight: 800,
  alignItems: 'center',
  justifyContent: 'flex-start',
  fontSize: '30px'
});

const LogoSearchWrapper = styled__default["default"]('div').withConfig({
  displayName: "logo-search-wrapper__LogoSearchWrapper",
  componentId: "sc-1iq7ssu-0"
})({
  display: 'flex',
  justifyContent: 'space-between',
  [constants.MEDIA_QUERIES.LARGESCREEN]: {
    display: 'block',
    paddingRight: constants.SPACING.SCALE_3,
    width: '33.33%'
  }
});

const RightHandSide = styled__default["default"]('div').withConfig({
  displayName: "right-hand-side__RightHandSide",
  componentId: "sc-1c11aed-0"
})({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  marginTop: constants.SPACING.SCALE_2,
  [constants.MEDIA_QUERIES.LARGESCREEN]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '66.66%',
    paddingLeft: constants.SPACING.SCALE_3,
    marginTop: 0
  }
});

const SearchWrapper = styled__default["default"]('div').withConfig({
  displayName: "search-wrapper__SearchWrapper",
  componentId: "sc-on0jnt-0"
})({
  marginTop: constants.SPACING.SCALE_1,
  width: '50%',
  minWidth: '110px',
  [constants.MEDIA_QUERIES.LARGESCREEN]: {
    width: '100%'
  }
});

const Ul = styled__default["default"]('ul').withConfig({
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
    marginTop: constants.SPACING.SCALE_1,
    width: '100%',
    [constants.MEDIA_QUERIES.LARGESCREEN]: {
      display: 'flex',
      paddingTop: serviceTitle ? 0 : constants.SPACING.SCALE_5,
      width: 'auto'
    }
  };
});

const Li = styled__default["default"]('li').withConfig({
  displayName: "list-item__Li",
  componentId: "sc-1kicpn1-0"
})({
  flex: '1 0 50%',
  width: '100%',
  listStyleType: 'none',
  margin: 0,
  padding: '3px 0',
  borderBottom: `1px solid ${govukColours.PROPOSITION_BORDER}`,
  [constants.MEDIA_QUERIES.LARGESCREEN]: {
    borderBottom: 0,
    flex: 'none',
    width: 'auto',
    paddingRight: constants.SPACING.SCALE_3
  }
});

// Label to be linked to checkbox in parent component
// in order to provide toggle function of mobile menu
// when javascript is not present.
const Button = styled__default["default"]('label').withConfig({
  displayName: "menu-button__Button",
  componentId: "sc-1yd67mz-0"
})({
  display: 'flex',
  alignItems: 'center',
  [constants.MEDIA_QUERIES.LARGESCREEN]: {
    display: 'none'
  }
});
const ButtonText = styled__default["default"]('div').withConfig({
  displayName: "menu-button__ButtonText",
  componentId: "sc-1yd67mz-1"
})({
  cursor: 'default',
  ':hover': {
    textDecoration: 'underline'
  }
});
const ButtonIcon = styled__default["default"]('div').withConfig({
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
  return /*#__PURE__*/React__namespace["default"].createElement(Button, {
    onClick: onClick,
    htmlFor: "govuk-react-menu-button"
  }, /*#__PURE__*/React__namespace["default"].createElement(ButtonText, null, title), /*#__PURE__*/React__namespace["default"].createElement(ButtonIcon, {
    open: open
  }));
};
MenuButton.defaultProps = {
  title: 'Menu',
  open: false,
  onClick: () => null
};

const Container = styled__default["default"]('div').withConfig({
  displayName: "icon-title__Container",
  componentId: "sc-onvli0-0"
})({
  verticalAlign: 'baseline'
});
const IconContainer = styled__default["default"]('span').withConfig({
  displayName: "icon-title__IconContainer",
  componentId: "sc-onvli0-1"
})({
  width: '36px',
  maxHeight: '27px',
  display: 'inline-block',
  marginRight: '7px'
});
const TitleContainer = styled__default["default"]('span').withConfig({
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
  return /*#__PURE__*/React__namespace.createElement(Container, null, /*#__PURE__*/React__namespace.createElement(IconContainer, null, icon), /*#__PURE__*/React__namespace.createElement(TitleContainer, null, children));
};
IconTitle.defaultProps = {
  icon: undefined,
  children: undefined
};
IconTitle.displayName = 'TopNav.IconTitle';

const TopNavAnchor = styled__default["default"]('a').withConfig({
  displayName: "top-nav-anchor__TopNavAnchor",
  componentId: "sc-lt39h5-0"
})({
  color: govukColours.WHITE,
  textDecoration: 'none',
  textDecorationSkipInk: 'none',
  borderBottom: '1px solid transparent',
  fontWeight: 700,
  lineHeight: 1,
  ':hover': {
    borderBottomColor: govukColours.WHITE
  },
  ':focus': {
    outline: `3px solid ${govukColours.YELLOW}`
  }
});
TopNavAnchor.displayName = 'TopNav.Anchor';

const NavLinkAnchor = styled__default["default"](TopNavAnchor).withConfig({
  displayName: "nav-link-anchor__NavLinkAnchor",
  componentId: "sc-1pr115z-0"
})({
  display: 'inline-block',
  ':focus': {
    color: govukColours.BLACK,
    backgroundColor: govukColours.YELLOW,
    outline: `3px solid ${govukColours.YELLOW}`,
    ':hover': {
      borderBottomColor: govukColours.BLACK
    }
  }
});
NavLinkAnchor.displayName = 'TopNav.NavLink';

// Layout/position of ServiceTitle
const ServiceTitleWrapper = styled__default["default"]('div').withConfig({
  displayName: "src__ServiceTitleWrapper",
  componentId: "sc-140rlix-0"
})(lib.typography.font({
  size: 24
}), {
  width: '50%',
  [constants.MEDIA_QUERIES.LARGESCREEN]: {
    width: 'auto'
  }
});

// Layout/position of MenuButtonWrapper
const MenuButtonWrapper = styled__default["default"]('div').withConfig({
  displayName: "src__MenuButtonWrapper",
  componentId: "sc-140rlix-1"
})({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  width: '50%',
  [constants.MEDIA_QUERIES.LARGESCREEN]: {
    width: 'auto'
  }
});

// Provides a fallback for the mobile menu toggle
// functionality when javascrcipt is unavailable
const Input = styled__default["default"]('input').withConfig({
  displayName: "src__Input",
  componentId: "sc-140rlix-2"
})({
  position: 'absolute',
  top: '-999em',
  ':checked + ul': {
    display: 'flex'
  },
  [constants.MEDIA_QUERIES.LARGESCREEN]: {
    display: 'none'
  }
});
/**
 * The GOV.UK header shows users that they are on GOV.UK and which service they are using.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/top-nav
 * - https://design-system.service.gov.uk/components/header/
 */
class TopNav extends React.Component {
  static IconTitle = IconTitle;
  static Anchor = TopNavAnchor;
  static NavLink = NavLinkAnchor;
  static displayName = 'TopNav';
  static defaultProps = {
    bgColor: govukColours.BLACK,
    color: govukColours.WHITE,
    company: /*#__PURE__*/React__namespace["default"].createElement(IconTitle, {
      icon: /*#__PURE__*/React__namespace["default"].createElement(CrownIcon__default["default"], {
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
    return /*#__PURE__*/React__namespace["default"].createElement(React__namespace["default"].Fragment, null, /*#__PURE__*/React__namespace["default"].createElement(TopNavWrapper, _extends({
      bgColor: bgColor,
      color: color
    }, props), /*#__PURE__*/React__namespace["default"].createElement(TopNavInner, null, /*#__PURE__*/React__namespace["default"].createElement(LogoSearchWrapper, null, /*#__PURE__*/React__namespace["default"].createElement(Company, null, company), search && /*#__PURE__*/React__namespace["default"].createElement(SearchWrapper, null, search)), /*#__PURE__*/React__namespace["default"].createElement(RightHandSide, null, /*#__PURE__*/React__namespace["default"].createElement(ServiceTitleWrapper, null, serviceTitle), children && /*#__PURE__*/React__namespace["default"].createElement(React__namespace["default"].Fragment, null, /*#__PURE__*/React__namespace["default"].createElement(MenuButtonWrapper, null, /*#__PURE__*/React__namespace["default"].createElement(MenuButton, {
      open: navigationOpen
    })), /*#__PURE__*/React__namespace["default"].createElement(Input, {
      id: "govuk-react-menu-button",
      type: "checkbox",
      checked: navigationOpen,
      onChange: this.toggleNavigationOpen
    }), /*#__PURE__*/React__namespace["default"].createElement(Ul, {
      id: "govuk-react-menu",
      serviceTitle: !!serviceTitle,
      open: navigationOpen
    }, Array.isArray(children) ? React__namespace["default"].Children.map(children, child => child ? /*#__PURE__*/React__namespace["default"].createElement(Li, null, child) : null) : /*#__PURE__*/React__namespace["default"].createElement(Li, null, children)))))), /*#__PURE__*/React__namespace["default"].createElement(BottomNavWrapper, null));
  }
}

exports.TopNav = TopNav;
exports["default"] = TopNav;
