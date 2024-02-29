import styled from 'styled-components';
import * as React from 'react';
import { SPACING_POINTS, BORDER_WIDTH_FORM_ELEMENT, FOCUSABLE, MEDIA_QUERIES } from '@govuk-react/constants';
import { typography, spacing } from '@govuk-react/lib';
import { BUTTON_COLOUR, BUTTON_COLOUR_DARKEN_15, WHITE } from 'govuk-colours';
import { stripUnit, darken } from 'polished';

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

const BUTTON_SHADOW_SIZE = BORDER_WIDTH_FORM_ELEMENT;
const RAW_SPACING_2 = SPACING_POINTS[2];
const RAW_BORDER_WIDTH = Number(stripUnit(BORDER_WIDTH_FORM_ELEMENT));
const RAW_SHADOW = Number(stripUnit(BUTTON_SHADOW_SIZE));
const HALF_SHADOW = RAW_SHADOW / 2;
const BASE_PAD = RAW_SPACING_2 - RAW_BORDER_WIDTH;
const StyledButton = styled('button').withConfig({
  shouldForwardProp: prop => !['isStart', 'buttonColour', 'buttonHoverColour', 'buttonShadowColour', 'buttonTextColour', 'icon'].includes(String(prop)),
  displayName: "src__StyledButton",
  componentId: "sc-19ocyxv-0"
})(_ref => {
  let {
    isStart
  } = _ref;
  return typography.font({
    size: isStart ? '24' : '19',
    lineHeight: isStart ? '1' : '19px',
    weight: isStart ? 'bold' : undefined
  });
}, FOCUSABLE, _ref2 => {
  let {
    buttonColour = BUTTON_COLOUR,
    buttonHoverColour = darken(0.05, buttonColour),
    buttonShadowColour = buttonColour === BUTTON_COLOUR ? BUTTON_COLOUR_DARKEN_15 : darken(0.15, buttonColour),
    buttonTextColour = WHITE,
    isStart
  } = _ref2;
  return {
    boxSizing: 'border-box',
    display: 'inline-block',
    position: 'relative',
    width: '100%',
    marginTop: 0,
    padding: isStart // differs from govuk-frontend owing to how icons displayed
    ? `${BASE_PAD}px ${SPACING_POINTS[3]}px` : `${BASE_PAD - HALF_SHADOW}px ${SPACING_POINTS[2]}px`,
    border: `${BORDER_WIDTH_FORM_ELEMENT} solid transparent`,
    borderRadius: 0,
    color: buttonTextColour,
    backgroundColor: buttonColour,
    boxShadow: `0 ${BUTTON_SHADOW_SIZE} 0 ${buttonShadowColour}`,
    textAlign: 'center',
    verticalAlign: 'top',
    cursor: 'pointer',
    WebkitAppearance: 'none',
    [MEDIA_QUERIES.TABLET]: {
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
      top: `-${BORDER_WIDTH_FORM_ELEMENT}`,
      right: `-${BORDER_WIDTH_FORM_ELEMENT}`,
      bottom: `-${RAW_BORDER_WIDTH + RAW_SHADOW}px`,
      left: `-${BORDER_WIDTH_FORM_ELEMENT}`,
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
      [MEDIA_QUERIES.TABLET]: {
        marginLeft: SPACING_POINTS[2]
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
}, spacing.withWhiteSpace({
  margin: {
    direction: 'bottom',
    size: 6,
    adjustment: RAW_SHADOW
  }
}));
const ButtonContents = styled('span').withConfig({
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
const Button = /*#__PURE__*/React.forwardRef((_ref4, ref) => {
  let {
    start,
    children,
    icon,
    ...props
  } = _ref4;
  return /*#__PURE__*/React.createElement(StyledButton, _extends({
    ref: ref,
    isStart: start,
    icon: icon
  }, props), icon ? /*#__PURE__*/React.createElement(ButtonContents, null, children) : children, icon);
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

export { Button, Button as default };
