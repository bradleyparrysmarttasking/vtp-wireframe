import * as React from 'react';
import styled from 'styled-components';
import { spacing, typography } from '@govuk-react/lib';
import { FOOTER_LINK, FOOTER_LINK_HOVER, BORDER_COLOUR, FOOTER_BORDER_TOP, FOOTER_BACKGROUND, FOOTER_TEXT } from 'govuk-colours';
import { SITE_WIDTH, GUTTER_HALF, MEDIA_QUERIES, GUTTER } from '@govuk-react/constants';
import Link from '@govuk-react/link';
import { H2 } from '@govuk-react/heading';
import VisuallyHidden from '@govuk-react/visually-hidden';

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
const WidthContainer = styled('div').withConfig({
  displayName: "width-container__WidthContainer",
  componentId: "sc-213f5v-0"
})({
  maxWidth: SITE_WIDTH,
  margin: `0 ${GUTTER_HALF}`,
  [MEDIA_QUERIES.TABLET]: {
    margin: `0 ${GUTTER}`
  },
  [MEDIA_QUERIES.MAX]: {
    margin: '0 auto'
  }
}, spacing.withWhiteSpace());

const NavigationContainer = styled('div').withConfig({
  displayName: "navigation__NavigationContainer",
  componentId: "sc-1wmnar6-0"
})({
  display: 'flex',
  marginRight: `-${GUTTER_HALF}`,
  marginLeft: `-${GUTTER_HALF}`,
  flexWrap: 'wrap'
});

const FooterLink = styled(Link).withConfig({
  displayName: "link__FooterLink",
  componentId: "sc-1vhdcoj-0"
})({
  ':link, :visited': {
    color: FOOTER_LINK
  },
  ':hover': {
    color: FOOTER_LINK_HOVER
  }
});

const SectionBreak = styled('hr').withConfig({
  displayName: "section-break__SectionBreak",
  componentId: "sc-1i3rjvm-0"
})({
  margin: 0,
  border: 0,
  borderBottom: `1px solid ${BORDER_COLOUR}`
}, spacing.withWhiteSpace({
  marginBottom: 8
}));

const MetaCustom = styled('div').withConfig({
  displayName: "meta-custom__MetaCustom",
  componentId: "sc-1dgx5ff-0"
})({
  marginBottom: spacing.simple(4)
});

const LicenceLogo = styled('svg').withConfig({
  displayName: "licence__LicenceLogo",
  componentId: "sc-76bcjk-0"
})({
  display: 'inline-block',
  marginRight: spacing.simple(2),
  marginBottom: spacing.simple(3),
  verticalAlign: 'top',
  [MEDIA_QUERIES.DESKTOP]: {
    marginBottom: 0
  }
});
const LicenceDescription = styled('span').withConfig({
  displayName: "licence__LicenceDescription",
  componentId: "sc-76bcjk-1"
})({
  display: 'inline-block'
});
const Licence = () => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LicenceLogo, {
  role: "presentation",
  focusable: "false",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 483.2 195.7",
  height: "17",
  width: "41"
}, /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  d: "M421.5 142.8V.1l-50.7 32.3v161.1h112.4v-50.7zm-122.3-9.6A47.12 47.12 0 0 1 221 97.8c0-26 21.1-47.1 47.1-47.1 16.7 0 31.4 8.7 39.7 21.8l42.7-27.2A97.63 97.63 0 0 0 268.1 0c-36.5 0-68.3 20.1-85.1 49.7A98 98 0 0 0 97.8 0C43.9 0 0 43.9 0 97.8s43.9 97.8 97.8 97.8c36.5 0 68.3-20.1 85.1-49.7a97.76 97.76 0 0 0 149.6 25.4l19.4 22.2h3v-87.8h-80l24.3 27.5zM97.8 145c-26 0-47.1-21.1-47.1-47.1s21.1-47.1 47.1-47.1 47.2 21 47.2 47S123.8 145 97.8 145"
})), /*#__PURE__*/React.createElement(LicenceDescription, null, "All content is available under the", ' ', /*#__PURE__*/React.createElement(FooterLink, {
  href: "https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/",
  rel: "license"
}, "Open Government Licence v3.0"), ", except where otherwise stated"));

const Meta = styled('div').withConfig({
  displayName: "meta__Meta",
  componentId: "sc-b55tvf-0"
})({
  display: 'flex',
  marginRight: `-${GUTTER_HALF}`,
  marginLeft: `-${GUTTER_HALF}`,
  flexWrap: 'wrap',
  alignItems: 'flex-end',
  justifyContent: 'center'
}, typography.common());

const MetaItem = styled('div').withConfig({
  displayName: "meta-item__MetaItem",
  componentId: "sc-nseoos-0"
})({
  marginRight: GUTTER_HALF,
  marginBottom: spacing.simple(5),
  marginLeft: GUTTER_HALF
}, _ref => {
  let {
    grow
  } = _ref;
  return grow && {
    flex: 1,
    flexBasis: '320px',
    [MEDIA_QUERIES.DESKTOP]: {
      flexBasis: 0
    }
  };
});
MetaItem.defaultProps = {
  grow: false
};

const StyledCopyright = styled(Link).withConfig({
  displayName: "copyright__StyledCopyright",
  componentId: "sc-1i22iwf-0"
})({
  display: 'inline-block',
  textAlign: 'center',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  ':link, :visited': {
    color: FOOTER_LINK
  },
  ':hover': {
    color: FOOTER_LINK_HOVER
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
  return /*#__PURE__*/React.createElement(StyledCopyright, {
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
  return /*#__PURE__*/React.createElement(Meta, null, /*#__PURE__*/React.createElement(MetaItem, {
    grow: true
  }, children, licence), copyright && /*#__PURE__*/React.createElement(MetaItem, null, /*#__PURE__*/React.createElement(Copyright, copyright)));
};
MetaContainer.defaultProps = {
  children: undefined,
  copyright: undefined,
  licence: /*#__PURE__*/React.createElement(Licence, null)
};

const UnorderedList = styled('ul').withConfig({
  displayName: "unordered-list__UnorderedList",
  componentId: "sc-1r7pzdm-0"
})(_ref => {
  let {
    inline
  } = _ref;
  return inline ? {
    marginTop: 0,
    marginBottom: spacing.simple(3),
    padding: 0
  } : {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    columnGap: `${GUTTER}`
  };
}, _ref2 => {
  let {
    columns
  } = _ref2;
  return columns && {
    [MEDIA_QUERIES.DESKTOP]: {
      // 2 or 3 columns only
      columnCount: columns
    }
  };
});
UnorderedList.defaultProps = {
  columns: undefined,
  inline: false
};

const ListItem = styled('li').withConfig({
  displayName: "list-item__ListItem",
  componentId: "sc-hn98ju-0"
})(_ref => {
  let {
    inline
  } = _ref;
  return inline ? {
    display: 'inline-block',
    marginRight: spacing.simple(3),
    marginBottom: spacing.simple(1)
  } : spacing.withWhiteSpace({
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
    heading
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VisuallyHidden, null, /*#__PURE__*/React.createElement(H2, null, heading)), children && /*#__PURE__*/React.createElement(UnorderedList, {
    inline: true
  }, Array.isArray(children) ? React.Children.map(children, (child, i) => child ? /*#__PURE__*/React.createElement(ListItem, {
    inline: true
  }, child) : null) : /*#__PURE__*/React.createElement(ListItem, {
    inline: true
  }, children)));
};

const Section = styled('div').withConfig({
  displayName: "section__Section",
  componentId: "sc-1fjqcmw-0"
})({
  display: 'inline-block',
  marginRight: GUTTER_HALF,
  marginBottom: GUTTER,
  marginLeft: GUTTER_HALF,
  verticalAlign: 'top',
  // Ensure columns take up equal width (typically one-half:one-half)
  flexGrow: 1,
  flexShrink: 1,
  // Make sure columns do not drop below 200px in width
  // Will typically result in wrapping, and end up in a single column on smaller screens.
  flexBasis: '200px',
  [MEDIA_QUERIES.DESKTOP]: {
    flexBasis: 'auto',
    '&:first-of-type': {
      flexGrow: 2
    }
  }
});

const SectionHeading = styled(H2).withConfig({
  displayName: "section-heading__SectionHeading",
  componentId: "sc-1i3z2gv-0"
})({
  borderBottom: `1px solid ${BORDER_COLOUR}`,
  paddingBottom: spacing.simple(2),
  marginTop: 0,
  [MEDIA_QUERIES.DESKTOP]: {
    paddingBottom: spacing.simple(4)
  }
}, spacing.withWhiteSpace({
  marginBottom: 7
}));

const NavigationLinks = _ref => {
  let {
    heading,
    listColumns,
    children
  } = _ref;
  return /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeading, {
    size: "MEDIUM"
  }, heading), children && /*#__PURE__*/React.createElement(UnorderedList, {
    columns: listColumns
  }, Array.isArray(children) ? React.Children.map(children, (child, i) => child ? /*#__PURE__*/React.createElement(ListItem, null, child) : null) : /*#__PURE__*/React.createElement(ListItem, null, children)));
};
NavigationLinks.defaultProps = {
  listColumns: 0
};

const FooterContainer = styled('footer').withConfig({
  displayName: "src__FooterContainer",
  componentId: "sc-1t3c5e2-0"
})({
  borderTop: `1px solid ${FOOTER_BORDER_TOP}`,
  background: `${FOOTER_BACKGROUND}`,
  color: `${FOOTER_TEXT}`
}, typography.font({
  size: 16
}), spacing.withWhiteSpace({
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
    licence = /*#__PURE__*/React.createElement(Licence, null),
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(FooterContainer, _extends({
    role: "contentinfo"
  }, props), /*#__PURE__*/React.createElement(Container, null, children && /*#__PURE__*/React.createElement(React.Fragment, null, children, /*#__PURE__*/React.createElement(SectionBreak, null)), /*#__PURE__*/React.createElement(MetaContainer, {
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
  licence: /*#__PURE__*/React.createElement(Licence, null)
};

export { Footer, Footer as default };
