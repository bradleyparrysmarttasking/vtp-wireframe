'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styled = require('styled-components');
var React = require('react');
var constants = require('@govuk-react/constants');
var lib = require('@govuk-react/lib');
var govukColours = require('govuk-colours');
var polished = require('polished');

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

var styled__default = /*#__PURE__*/_interopDefault(styled);
var React__namespace = /*#__PURE__*/_interopNamespace(React);

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

const BUTTON_SHADOW_SIZE = constants.BORDER_WIDTH_FORM_ELEMENT;
const RAW_SPACING_2 = constants.SPACING_POINTS[2];
const RAW_BORDER_WIDTH = Number(polished.stripUnit(constants.BORDER_WIDTH_FORM_ELEMENT));
const RAW_SHADOW = Number(polished.stripUnit(BUTTON_SHADOW_SIZE));
const HALF_SHADOW = RAW_SHADOW / 2;
const BASE_PAD = RAW_SPACING_2 - RAW_BORDER_WIDTH;
const StyledButton = styled__default["default"]('button').withConfig({
  shouldForwardProp: prop => !['isStart', 'buttonColour', 'buttonHoverColour', 'buttonShadowColour', 'buttonTextColour', 'icon'].includes(String(prop)),
  displayName: "src__StyledButton",
  componentId: "sc-19ocyxv-0"
})(_ref => {
  let {
    isStart
  } = _ref;
  return lib.typography.font({
    size: isStart ? '24' : '19',
    lineHeight: isStart ? '1' : '19px',
    weight: isStart ? 'bold' : undefined
  });
}, constants.FOCUSABLE, _ref2 => {
  let {
    buttonColour = govukColours.BUTTON_COLOUR,
    buttonHoverColour = polished.darken(0.05, buttonColour),
    buttonShadowColour = buttonColour === govukColours.BUTTON_COLOUR ? govukColours.BUTTON_COLOUR_DARKEN_15 : polished.darken(0.15, buttonColour),
    buttonTextColour = govukColours.WHITE,
    isStart
  } = _ref2;
  return {
    boxSizing: 'border-box',
    display: 'inline-block',
    position: 'relative',
    width: '100%',
    marginTop: 0,
    padding: isStart // differs from govuk-frontend owing to how icons displayed
    ? `${BASE_PAD}px ${constants.SPACING_POINTS[3]}px` : `${BASE_PAD - HALF_SHADOW}px ${constants.SPACING_POINTS[2]}px`,
    border: `${constants.BORDER_WIDTH_FORM_ELEMENT} solid transparent`,
    borderRadius: 0,
    color: buttonTextColour,
    backgroundColor: buttonColour,
    boxShadow: `0 ${BUTTON_SHADOW_SIZE} 0 ${buttonShadowColour}`,
    textAlign: 'center',
    verticalAlign: 'top',
    cursor: 'pointer',
    WebkitAppearance: 'none',
    [constants.MEDIA_QUERIES.TABLET]: {
      width: 'auto'
    },
    '&:link, &:visited, &:active, &:hover': {
      color: buttonTextColour,
      textDecoration: 'none'
    },
    '&::-moz-focus-inner': {
      padding: 0,
      border: 0
    },
    '&:hover, &:focus': {
      backgroundColor: buttonHoverColour
    },
    ':active': {
      top: BUTTON_SHADOW_SIZE,
      boxShadow: 'none'
    },
    // NB this is from govuk-frontend
    // Use a pseudo element to expand the click target area to include the
    // button's shadow as well, in case users try to click it.
    '::before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: `-${constants.BORDER_WIDTH_FORM_ELEMENT}`,
      right: `-${constants.BORDER_WIDTH_FORM_ELEMENT}`,
      bottom: `-${RAW_BORDER_WIDTH + RAW_SHADOW}px`,
      left: `-${constants.BORDER_WIDTH_FORM_ELEMENT}`,
      background: 'transparent'
    },
    '&:active::before': {
      top: `-${RAW_BORDER_WIDTH + RAW_SHADOW}px`
    },
    ':disabled': {
      opacity: 0.5,
      background: buttonColour,
      ':hover': {
        backgroundColor: buttonColour,
        cursor: 'default'
      },
      ':focus': {
        outline: 'none'
      },
      ':active': {
        top: 0,
        boxShadow: `0 ${BUTTON_SHADOW_SIZE} 0 ${buttonShadowColour}`
      }
    },
    ' svg': {
      maxWidth: '15px',
      [constants.MEDIA_QUERIES.TABLET]: {
        marginLeft: constants.SPACING_POINTS[2]
      }
    }
  };
},
// NB we drift from govuk-frontend here in how we display icons
_ref3 => {
  let {
    icon
  } = _ref3;
  if (icon) {
    return {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    };
  }
  return undefined;
}, lib.spacing.withWhiteSpace({
  margin: {
    direction: 'bottom',
    size: 6,
    adjustment: RAW_SHADOW
  }
}));
const ButtonContents = styled__default["default"]('span').withConfig({
  displayName: "src__ButtonContents",
  componentId: "sc-19ocyxv-1"
})({
  flexGrow: 1
});
/**
 * Use the button component to help users carry out an action like starting an application or saving their information.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/button
 * - https://design-system.service.gov.uk/components/button/
 */
const Button = /*#__PURE__*/React__namespace.forwardRef((_ref4, ref) => {
  let {
    start,
    children,
    icon,
    ...props
  } = _ref4;
  return /*#__PURE__*/React__namespace.createElement(StyledButton, _extends({
    ref: ref,
    isStart: start,
    icon: icon
  }, props), icon ? /*#__PURE__*/React__namespace.createElement(ButtonContents, null, children) : children, icon);
});
Button.defaultProps = {
  icon: undefined,
  start: false,
  buttonColour: undefined,
  buttonHoverColour: undefined,
  buttonShadowColour: undefined,
  buttonTextColour: undefined
};
Button.displayName = 'Button';

exports.Button = Button;
exports["default"] = Button;
