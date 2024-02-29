'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var lib = require('@govuk-react/lib');
var govukColours = require('govuk-colours');
var constants = require('@govuk-react/constants');
var Link = require('@govuk-react/link');
var heading = require('@govuk-react/heading');
var VisuallyHidden = require('@govuk-react/visually-hidden');

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
var Link__default = /*#__PURE__*/_interopDefault(Link);
var VisuallyHidden__default = /*#__PURE__*/_interopDefault(VisuallyHidden);

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

// tracking https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/objects/_width-container.scss
const WidthContainer = styled__default["default"]('div').withConfig({
  displayName: "width-container__WidthContainer",
  componentId: "sc-213f5v-0"
})({
  maxWidth: constants.SITE_WIDTH,
  margin: `0 ${constants.GUTTER_HALF}`,
  [constants.MEDIA_QUERIES.TABLET]: {
    margin: `0 ${constants.GUTTER}`
  },
  [constants.MEDIA_QUERIES.MAX]: {
    margin: '0 auto'
  }
}, lib.spacing.withWhiteSpace());

const NavigationContainer = styled__default["default"]('div').withConfig({
  displayName: "navigation__NavigationContainer",
  componentId: "sc-1wmnar6-0"
})({
  display: 'flex',
  marginRight: `-${constants.GUTTER_HALF}`,
  marginLeft: `-${constants.GUTTER_HALF}`,
  flexWrap: 'wrap'
});

const FooterLink = styled__default["default"](Link__default["default"]).withConfig({
  displayName: "link__FooterLink",
  componentId: "sc-1vhdcoj-0"
})({
  ':link, :visited': {
    color: govukColours.FOOTER_LINK
  },
  ':hover': {
    color: govukColours.FOOTER_LINK_HOVER
  }
});

const SectionBreak = styled__default["default"]('hr').withConfig({
  displayName: "section-break__SectionBreak",
  componentId: "sc-1i3rjvm-0"
})({
  margin: 0,
  border: 0,
  borderBottom: `1px solid ${govukColours.BORDER_COLOUR}`
}, lib.spacing.withWhiteSpace({
  marginBottom: 8
}));

const MetaCustom = styled__default["default"]('div').withConfig({
  displayName: "meta-custom__MetaCustom",
  componentId: "sc-1dgx5ff-0"
})({
  marginBottom: lib.spacing.simple(4)
});

const LicenceLogo = styled__default["default"]('svg').withConfig({
  displayName: "licence__LicenceLogo",
  componentId: "sc-76bcjk-0"
})({
  display: 'inline-block',
  marginRight: lib.spacing.simple(2),
  marginBottom: lib.spacing.simple(3),
  verticalAlign: 'top',
  [constants.MEDIA_QUERIES.DESKTOP]: {
    marginBottom: 0
  }
});
const LicenceDescription = styled__default["default"]('span').withConfig({
  displayName: "licence__LicenceDescription",
  componentId: "sc-76bcjk-1"
})({
  display: 'inline-block'
});
const Licence = () => /*#__PURE__*/React__namespace.createElement("div", null, /*#__PURE__*/React__namespace.createElement(LicenceLogo, {
  role: "presentation",
  focusable: "false",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 483.2 195.7",
  height: "17",
  width: "41"
}, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  d: "M421.5 142.8V.1l-50.7 32.3v161.1h112.4v-50.7zm-122.3-9.6A47.12 47.12 0 0 1 221 97.8c0-26 21.1-47.1 47.1-47.1 16.7 0 31.4 8.7 39.7 21.8l42.7-27.2A97.63 97.63 0 0 0 268.1 0c-36.5 0-68.3 20.1-85.1 49.7A98 98 0 0 0 97.8 0C43.9 0 0 43.9 0 97.8s43.9 97.8 97.8 97.8c36.5 0 68.3-20.1 85.1-49.7a97.76 97.76 0 0 0 149.6 25.4l19.4 22.2h3v-87.8h-80l24.3 27.5zM97.8 145c-26 0-47.1-21.1-47.1-47.1s21.1-47.1 47.1-47.1 47.2 21 47.2 47S123.8 145 97.8 145"
})), /*#__PURE__*/React__namespace.createElement(LicenceDescription, null, "All content is available under the", ' ', /*#__PURE__*/React__namespace.createElement(FooterLink, {
  href: "https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/",
  rel: "license"
}, "Open Government Licence v3.0"), ", except where otherwise stated"));

const Meta = styled__default["default"]('div').withConfig({
  displayName: "meta__Meta",
  componentId: "sc-b55tvf-0"
})({
  display: 'flex',
  marginRight: `-${constants.GUTTER_HALF}`,
  marginLeft: `-${constants.GUTTER_HALF}`,
  flexWrap: 'wrap',
  alignItems: 'flex-end',
  justifyContent: 'center'
}, lib.typography.common());

const MetaItem = styled__default["default"]('div').withConfig({
  displayName: "meta-item__MetaItem",
  componentId: "sc-nseoos-0"
})({
  marginRight: constants.GUTTER_HALF,
  marginBottom: lib.spacing.simple(5),
  marginLeft: constants.GUTTER_HALF
}, _ref => {
  let {
    grow
  } = _ref;
  return grow && {
    flex: 1,
    flexBasis: '320px',
    [constants.MEDIA_QUERIES.DESKTOP]: {
      flexBasis: 0
    }
  };
});
MetaItem.defaultProps = {
  grow: false
};

const StyledCopyright = styled__default["default"](Link__default["default"]).withConfig({
  displayName: "copyright__StyledCopyright",
  componentId: "sc-1i22iwf-0"
})({
  display: 'inline-block',
  textAlign: 'center',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  ':link, :visited': {
    color: govukColours.FOOTER_LINK
  },
  ':hover': {
    color: govukColours.FOOTER_LINK_HOVER
  }
}, _ref => {
  let {
    image
  } = _ref;
  return image && {
    minWidth: image.width,
    paddingTop: image.height + 10,
    backgroundImage: `url(${image.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 0%',
    backgroundSize: `${image.width}px ${image.height}px`
  };
});
const Copyright = _ref2 => {
  let {
    text,
    image,
    link
  } = _ref2;
  return /*#__PURE__*/React__namespace.createElement(StyledCopyright, {
    href: link,
    image: image
  }, "\xA9 ", text);
};
Copyright.defaultProps = {
  text: undefined,
  image: undefined,
  link: undefined
};

const MetaContainer = _ref => {
  let {
    children,
    copyright,
    licence
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement(Meta, null, /*#__PURE__*/React__namespace.createElement(MetaItem, {
    grow: true
  }, children, licence), copyright && /*#__PURE__*/React__namespace.createElement(MetaItem, null, /*#__PURE__*/React__namespace.createElement(Copyright, copyright)));
};
MetaContainer.defaultProps = {
  children: undefined,
  copyright: undefined,
  licence: /*#__PURE__*/React__namespace.createElement(Licence, null)
};

const UnorderedList = styled__default["default"]('ul').withConfig({
  displayName: "unordered-list__UnorderedList",
  componentId: "sc-1r7pzdm-0"
})(_ref => {
  let {
    inline
  } = _ref;
  return inline ? {
    marginTop: 0,
    marginBottom: lib.spacing.simple(3),
    padding: 0
  } : {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    columnGap: `${constants.GUTTER}`
  };
}, _ref2 => {
  let {
    columns
  } = _ref2;
  return columns && {
    [constants.MEDIA_QUERIES.DESKTOP]: {
      // 2 or 3 columns only
      columnCount: columns
    }
  };
});
UnorderedList.defaultProps = {
  columns: undefined,
  inline: false
};

const ListItem = styled__default["default"]('li').withConfig({
  displayName: "list-item__ListItem",
  componentId: "sc-hn98ju-0"
})(_ref => {
  let {
    inline
  } = _ref;
  return inline ? {
    display: 'inline-block',
    marginRight: lib.spacing.simple(3),
    marginBottom: lib.spacing.simple(1)
  } : lib.spacing.withWhiteSpace({
    marginBottom: 4
  });
}, {
  '&:last-child': {
    marginBottom: 0
  }
});
ListItem.defaultProps = {
  inline: false
};

const MetaLinks = _ref => {
  let {
    children,
    heading: heading$1
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement(VisuallyHidden__default["default"], null, /*#__PURE__*/React__namespace.createElement(heading.H2, null, heading$1)), children && /*#__PURE__*/React__namespace.createElement(UnorderedList, {
    inline: true
  }, Array.isArray(children) ? React__namespace.Children.map(children, (child, i) => child ? /*#__PURE__*/React__namespace.createElement(ListItem, {
    inline: true
  }, child) : null) : /*#__PURE__*/React__namespace.createElement(ListItem, {
    inline: true
  }, children)));
};

const Section = styled__default["default"]('div').withConfig({
  displayName: "section__Section",
  componentId: "sc-1fjqcmw-0"
})({
  display: 'inline-block',
  marginRight: constants.GUTTER_HALF,
  marginBottom: constants.GUTTER,
  marginLeft: constants.GUTTER_HALF,
  verticalAlign: 'top',
  // Ensure columns take up equal width (typically one-half:one-half)
  flexGrow: 1,
  flexShrink: 1,
  // Make sure columns do not drop below 200px in width
  // Will typically result in wrapping, and end up in a single column on smaller screens.
  flexBasis: '200px',
  [constants.MEDIA_QUERIES.DESKTOP]: {
    flexBasis: 'auto',
    '&:first-of-type': {
      flexGrow: 2
    }
  }
});

const SectionHeading = styled__default["default"](heading.H2).withConfig({
  displayName: "section-heading__SectionHeading",
  componentId: "sc-1i3z2gv-0"
})({
  borderBottom: `1px solid ${govukColours.BORDER_COLOUR}`,
  paddingBottom: lib.spacing.simple(2),
  marginTop: 0,
  [constants.MEDIA_QUERIES.DESKTOP]: {
    paddingBottom: lib.spacing.simple(4)
  }
}, lib.spacing.withWhiteSpace({
  marginBottom: 7
}));

const NavigationLinks = _ref => {
  let {
    heading,
    listColumns,
    children
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement(Section, null, /*#__PURE__*/React__namespace.createElement(SectionHeading, {
    size: "MEDIUM"
  }, heading), children && /*#__PURE__*/React__namespace.createElement(UnorderedList, {
    columns: listColumns
  }, Array.isArray(children) ? React__namespace.Children.map(children, (child, i) => child ? /*#__PURE__*/React__namespace.createElement(ListItem, null, child) : null) : /*#__PURE__*/React__namespace.createElement(ListItem, null, children)));
};
NavigationLinks.defaultProps = {
  listColumns: 0
};

const FooterContainer = styled__default["default"]('footer').withConfig({
  displayName: "src__FooterContainer",
  componentId: "sc-1t3c5e2-0"
})({
  borderTop: `1px solid ${govukColours.FOOTER_BORDER_TOP}`,
  background: `${govukColours.FOOTER_BACKGROUND}`,
  color: `${govukColours.FOOTER_TEXT}`
}, lib.typography.font({
  size: 16
}), lib.spacing.withWhiteSpace({
  padding: [{
    size: 7,
    direction: 'top'
  }, {
    size: 5,
    direction: 'bottom'
  }]
}));

/**
 * The footer provides copyright, licensing and other information about your service and department.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/footer
 * - https://design-system.service.gov.uk/components/footer/
 *
 */
const Footer = _ref => {
  let {
    children = undefined,
    container: Container = Footer.WidthContainer,
    copyright = undefined,
    meta = undefined,
    licence = /*#__PURE__*/React__namespace.createElement(Licence, null),
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement(FooterContainer, _extends({
    role: "contentinfo"
  }, props), /*#__PURE__*/React__namespace.createElement(Container, null, children && /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, children, /*#__PURE__*/React__namespace.createElement(SectionBreak, null)), /*#__PURE__*/React__namespace.createElement(MetaContainer, {
    copyright: copyright,
    licence: licence
  }, meta)));
};
Footer.displayName = 'Footer';
Footer.Link = FooterLink;
Footer.Navigation = NavigationContainer;
Footer.MetaCustom = MetaCustom;
Footer.MetaLinks = MetaLinks;
Footer.NavigationLinks = NavigationLinks;
Footer.WidthContainer = WidthContainer;
Footer.Licence = Licence;
Footer.defaultProps = {
  children: undefined,
  container: Footer.WidthContainer,
  copyright: undefined,
  meta: undefined,
  licence: /*#__PURE__*/React__namespace.createElement(Licence, null)
};

exports.Footer = Footer;
exports["default"] = Footer;
