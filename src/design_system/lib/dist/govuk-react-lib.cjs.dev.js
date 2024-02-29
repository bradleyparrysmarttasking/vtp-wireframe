'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var constants = require('@govuk-react/constants');
var govukColours = require('govuk-colours');

// This lib is effectively a port of govuk-frontend's visually-hidden sass helpers
// Tracking:
// https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/helpers/_visually-hidden.scss

function visuallyHidden() {
  let {
    important: isImportant = true,
    focusable: isFocusable = false
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const important = isImportant ? ' !important' : '';
  return {
    position: `absolute${important}`,
    width: `1px${important}`,
    height: `1px${important}`,
    margin: `0${important}`,
    overflow: `hidden${important}`,
    clip: `rect(0 0 0 0)${important}`,
    clipPath: `inset(50%)${important}`,
    border: `0${important}`,
    whiteSpace: `nowrap${important}`,
    ...(isFocusable ? {
      '&:active,&:focus': {
        position: `static${important}`,
        width: `auto${important}`,
        height: `auto${important}`,
        margin: `inherit${important}`,
        overflow: `visible${important}`,
        clip: `auto${important}`,
        clipPath: `none${important}`,
        whiteSpace: `inherit${important}`
      }
    } : {
      padding: `0${important}`
    })
  };
}
function focusable() {
  let {
    important = true
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return visuallyHidden({
    important,
    focusable: true
  });
}
visuallyHidden.focusable = focusable;

// This lib is effectively a port of govuk-frontend's spacing sass helpers
function simple(size) {
  const scale = constants.SPACING_POINTS[Math.abs(size)];
  const polarity = size < 0 ? -1 : 1;
  if (scale === undefined) {
    throw Error(`Unknown spacing size ${size} - expected a point from the spacing scale.`);
  }
  return scale * polarity;
}
function styleForDirection(size, property) {
  let direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  // NB styled-components automatically sets style to include `px` if needed
  return {
    [direction && direction !== 'all' ? `${property}-${direction}` : property]: size
  };
}
function responsive$1(_ref) {
  let {
    size,
    property,
    direction = null,
    adjustment = 0
  } = _ref;
  const scale = constants.SPACING_MAP[Math.abs(Number(size))];
  const polarity = Number(size) < 0 ? -1 : 1;
  if (scale === undefined) {
    throw Error(`Unknown responsive spacing size ${size} - expected a point from the responsive spacing scale.`);
  }
  if (!property) {
    throw Error('No property passed to responsiveSpacing');
  }
  if (Array.isArray(direction)) {
    return Object.assign({}, ...direction.map(dir => styleForDirection(scale.mobile * polarity + adjustment, property, dir)), {
      [constants.MEDIA_QUERIES.TABLET]: Object.assign({}, ...direction.map(dir => styleForDirection(scale.tablet * polarity + adjustment, property, dir)))
    });
  }
  const f = {
    ...styleForDirection(scale.mobile * polarity + adjustment, property, direction),
    [constants.MEDIA_QUERIES.TABLET]: styleForDirection(scale.tablet * polarity + adjustment, property, direction)
  };
  return f;
}
function responsiveMargin(value) {
  if (Number.isInteger(value)) {
    return responsive$1({
      size: Number(value),
      property: 'margin'
    });
  }
  if (typeof value !== 'object') {
    throw Error('Expected padding value to be an object or integer');
  }
  const {
    size,
    direction,
    adjustment
  } = value;
  return responsive$1({
    size,
    property: 'margin',
    direction,
    adjustment
  });
}
function responsivePadding(value) {
  if (Number.isInteger(value)) {
    return responsive$1({
      size: Number(value),
      property: 'padding'
    });
  }
  if (typeof value !== 'object') {
    throw Error('Expected padding value to be an object or integer');
  }
  const {
    size,
    direction,
    adjustment
  } = value;
  return responsive$1({
    size,
    property: 'padding',
    direction,
    adjustment
  });
}

// withWhiteSpace lib styling function
// does not form part of govuk-frontend

// `withWhiteSpace(config)`
// generates a styling function, based on config, which can be used when styling a component

// `margin` and `padding` are supported as props and config values
// can be a single number, to indicate scale size to use in all directions
// can be an object in format `{ size, direction, adjustment }`
// - see `responsivePadding` and `responsiveMargin` calls
// can be an array of numbers/objects
function withWhiteSpace() {
  let config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function () {
    let {
      margin = config.margin,
      padding = config.padding,
      mb: marginBottom = config.marginBottom
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const styles = [];
    if (margin !== undefined) {
      if (Array.isArray(margin)) {
        styles.push(...margin.map(val => responsiveMargin(val)));
      } else {
        styles.push(responsiveMargin(margin));
      }
    }
    if (padding !== undefined) {
      if (Array.isArray(padding)) {
        styles.push(...padding.map(val => responsivePadding(val)));
      } else {
        styles.push(responsivePadding(padding));
      }
    }
    if (marginBottom !== undefined) {
      styles.push(responsiveMargin({
        size: marginBottom,
        direction: 'bottom'
      }));
    }
    return styles;
  };
}
function withWidth() {
  let config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function () {
    let {
      setWidth = config.width
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (setWidth) {
      const width = constants.WIDTHS[setWidth] || setWidth;
      const {
        mediaQuery = constants.MEDIA_QUERIES.TABLET,
        noDefault
      } = config;
      return {
        width: noDefault ? undefined : '100%',
        [mediaQuery]: {
          width
        }
      };
    }
    return undefined;
  };
}
let ComponentSizeVariant = /*#__PURE__*/function (ComponentSizeVariant) {
  ComponentSizeVariant["XLARGE"] = "XLARGE";
  ComponentSizeVariant["LARGE"] = "LARGE";
  ComponentSizeVariant["MEDIUM"] = "MEDIUM";
  ComponentSizeVariant["SMALL"] = "SMALL";
  return ComponentSizeVariant;
}({});

var index$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  simple: simple,
  responsive: responsive$1,
  responsiveMargin: responsiveMargin,
  responsivePadding: responsivePadding,
  withWhiteSpace: withWhiteSpace,
  withWidth: withWidth,
  ComponentSizeVariant: ComponentSizeVariant
});

// This lib is effectively a port of govuk-frontend's typography sass helpers
const textColour = {
  color: govukColours.BLACK,
  [constants.MEDIA_QUERIES.PRINT]: {
    color: '#000'
  }
};
const textColor = textColour;
function common$1() {
  let fontFamily = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : constants.FONT_STACK;
  return {
    fontFamily,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    [constants.MEDIA_QUERY_PRINT]: {
      fontFamily: constants.FONT_STACK_PRINT
    }
  };
}
function getSizeStyle(scale) {
  let lineHeight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : scale.lineHeight;
  return {
    fontSize: `${scale.fontSize}px`,
    lineHeight
  };
}
function responsive(size, overrideLineHeight) {
  const scale = constants.TYPOGRAPHY_SCALE[size];
  if (!scale) {
    throw Error(`Unknown font size ${size} - expected a point from the typography scale.`);
  }
  return {
    ...getSizeStyle(scale.mobile, overrideLineHeight),
    [constants.MEDIA_QUERIES.TABLET]: getSizeStyle(scale.tablet, overrideLineHeight),
    [constants.MEDIA_QUERIES.PRINT]: getSizeStyle(scale.print, overrideLineHeight)
  };
}
function font() {
  let {
    size,
    weight = 'regular',
    tabular = false,
    lineHeight
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    ...common$1(tabular ? constants.FONT_STACK_TABULAR : undefined),
    ...(constants.FONT_WEIGHTS[weight] ? {
      fontWeight: constants.FONT_WEIGHTS[weight]
    } : undefined),
    ...(size ? responsive(size, lineHeight) : undefined)
  };
}

var index$2 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  textColour: textColour,
  textColor: textColor,
  common: common$1,
  responsive: responsive,
  font: font
});

// Tracking:
const FOCUS_TEXT_COLOUR = govukColours.BLACK;
function common(fontFamily) {
  return [common$1(fontFamily), constants.FOCUSABLE_FILL];
}
const styleDefault = {
  ':link': {
    color: govukColours.LINK_COLOUR
  },
  ':visited': {
    color: govukColours.LINK_VISITED_COLOUR
  },
  ':hover': {
    color: govukColours.LINK_HOVER_COLOUR
  },
  ':active': {
    color: govukColours.LINK_ACTIVE_COLOUR
  },
  ':focus': {
    color: FOCUS_TEXT_COLOUR
  }
};
const styleMuted = {
  '&:link, &:visited, &:hover, &:active': {
    color: govukColours.SECONDARY_TEXT_COLOUR
  },
  '&:focus': {
    color: FOCUS_TEXT_COLOUR
  }
};
const styleText = {
  '&:link, &:visited, &:hover, &:active, &:focus': textColour
};
const styleNoVisitedState = {
  ':link': {
    color: govukColours.LINK_COLOUR
  },
  ':visited': {
    color: govukColours.LINK_COLOUR
  },
  ':hover': {
    color: govukColours.LINK_HOVER_COLOUR
  },
  ':active': {
    color: govukColours.LINK_ACTIVE_COLOUR
  },
  ':focus': {
    color: FOCUS_TEXT_COLOUR
  }
};
const printFriendly = {
  [constants.MEDIA_QUERY_PRINT]: {
    '&[href^="/"], &[href^="http://"], &[href^="https://"]': {
      '&::after': {
        content: '" (" attr(href) ")"',
        fontSize: '90%',
        wordWrap: 'break-word'
      }
    }
  }
};

var index$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  common: common,
  styleDefault: styleDefault,
  styleMuted: styleMuted,
  styleText: styleText,
  styleNoVisitedState: styleNoVisitedState,
  printFriendly: printFriendly
});

// Tracking:
// https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/helpers/_shape-arrow.scss
const root3 = 1.732; // Math.sqrt(3);

function equilateralHeight(base) {
  return base / 2 * root3;
}
function makeShape(direction, base, height) {
  const perpendicular = base / 2;
  switch (direction) {
    case 'up':
      return {
        clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
        borderWidth: `0 ${perpendicular}px ${height}px ${perpendicular}px`,
        borderBottomColor: 'inherit'
      };
    case 'right':
      return {
        clipPath: 'polygon(0% 0%, 100% 50%, 0% 100%)',
        borderWidth: `${perpendicular}px 0 ${perpendicular}px ${height}px`,
        borderLeftColor: 'inherit'
      };
    case 'down':
      return {
        clipPath: 'polygon(0% 0%, 50% 100%, 100% 0%)',
        borderWidth: `${height}px ${perpendicular}px 0 ${perpendicular}px`,
        borderTopColor: 'inherit'
      };
    case 'left':
      return {
        clipPath: 'polygon(0% 50%, 100% 100%, 100% 0%)',
        borderWidth: `${perpendicular}px ${height}px ${perpendicular}px 0`,
        borderRightColor: 'inherit'
      };
    default:
      throw Error(`Invalid arrow direction: expected 'up', 'right', 'down' or 'left', got ${direction}`);
  }
}

// eslint-disable-next-line import/prefer-default-export
function arrow(_ref) {
  let {
    direction,
    base = 0,
    height = equilateralHeight(base),
    display = 'block'
  } = _ref;
  return {
    display,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderColor: 'transparent',
    ...makeShape(direction, base, height)
  };
}

var index = /*#__PURE__*/Object.freeze({
  __proto__: null,
  arrow: arrow
});

exports.link = index$1;
exports.shape = index;
exports.spacing = index$3;
exports.typography = index$2;
exports.visuallyHidden = visuallyHidden;
