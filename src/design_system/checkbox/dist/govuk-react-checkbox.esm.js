import * as React from 'react';
import styled from 'styled-components';
import HintText from '@govuk-react/hint-text';
import { FOCUS_COLOUR } from 'govuk-colours';
import { SPACING_POINTS, FONT_SIZE, MEDIA_QUERIES, FOCUS_WIDTH, BORDER_WIDTH_FORM_ELEMENT, BORDER_WIDTH } from '@govuk-react/constants';
import { typography, spacing } from '@govuk-react/lib';

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

const checkboxSize = SPACING_POINTS[7];
const checkboxSizeSmall = SPACING_POINTS[5];
const labelPaddingLeftRight = SPACING_POINTS[3];
const StyledCheckbox = styled('label').withConfig({
  displayName: "src__StyledCheckbox",
  componentId: "sc-1hkoucn-0"
})(typography.font({
  size: 19
}), {
  display: 'block',
  position: 'relative',
  minHeight: checkboxSize,
  padding: `0 0 0 ${checkboxSize}px`,
  clear: 'left'
}, _ref => {
  let {
    sizeVariant
  } = _ref;
  return sizeVariant === 'SMALL' && {
    paddingRight: 22,
    span: {
      padding: '12px 15px 13px 0',
      fontSize: FONT_SIZE.SIZE_16,
      [MEDIA_QUERIES.LARGESCREEN]: {
        fontSize: FONT_SIZE.SIZE_19,
        padding: `10px 15px 10px 1px`
      },
      ':before': {
        width: checkboxSizeSmall,
        height: checkboxSizeSmall,
        top: 8
      },
      ':after': {
        top: 15,
        left: 6,
        width: 11,
        height: 4.5,
        borderWidth: '0 0 3px 3px'
      }
    }
  };
}, spacing.withWhiteSpace({
  marginBottom: 2
}));
const StyledInput = styled('input').withConfig({
  displayName: "src__StyledInput",
  componentId: "sc-1hkoucn-1"
})({
  position: 'absolute',
  zIndex: 1,
  top: 0,
  left: 0,
  width: checkboxSize,
  height: checkboxSize,
  opacity: 0,
  ':checked + span:after': {
    opacity: 1
  },
  ':focus + span:before': {
    outline: `${FOCUS_WIDTH} solid transparent`,
    outlineOffset: FOCUS_WIDTH,
    boxShadow: `0 0 0 ${FOCUS_WIDTH} ${FOCUS_COLOUR}`
  }
}, _ref2 => {
  let {
    disabled
  } = _ref2;
  return {
    cursor: disabled ? 'default' : 'pointer',
    ' + span': {
      opacity: disabled ? '.5' : '1',
      pointerEvents: disabled ? 'none' : 'auto'
    }
  };
});
const StyledLabel = styled('span').withConfig({
  displayName: "src__StyledLabel",
  componentId: "sc-1hkoucn-2"
})({
  display: 'inline-block',
  cursor: 'pointer',
  padding: `8px ${labelPaddingLeftRight}px ${SPACING_POINTS[1]}px`,
  MsTouchAction: 'manipulation',
  touchAction: 'manipulation',
  '::before': {
    content: "''",
    boxSizing: 'border-box',
    position: 'absolute',
    top: 0,
    left: 0,
    width: checkboxSize,
    height: checkboxSize,
    border: `${BORDER_WIDTH_FORM_ELEMENT} solid black`,
    background: 'transparent'
  },
  '::after': {
    content: "''",
    position: 'absolute',
    top: '11px',
    left: '9px',
    width: '18px',
    height: '7px',
    transform: 'rotate(-45deg)',
    border: 'solid',
    borderWidth: `0 0 ${BORDER_WIDTH} ${BORDER_WIDTH}`,
    borderTopColor: 'transparent',
    background: 'transparent',
    opacity: 0
  }
});
const StyledCheckboxHint = styled(HintText).withConfig({
  displayName: "src__StyledCheckboxHint",
  componentId: "sc-1hkoucn-3"
})({
  display: 'block',
  paddingLeft: labelPaddingLeftRight,
  paddingRight: labelPaddingLeftRight
});

/**
 * Let users select one or more options by using the checkboxes component.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/checkbox
 * - https://design-system.service.gov.uk/components/checkboxes/
 */
const Checkbox = /*#__PURE__*/React.forwardRef((_ref3, ref) => {
  let {
    children,
    className,
    hint,
    sizeVariant,
    ...props
  } = _ref3;
  return /*#__PURE__*/React.createElement(StyledCheckbox, {
    className: className,
    sizeVariant: sizeVariant
  }, /*#__PURE__*/React.createElement(StyledInput, _extends({
    type: "checkbox"
  }, props, {
    ref: ref
  })), /*#__PURE__*/React.createElement(StyledLabel, null, children), hint && /*#__PURE__*/React.createElement(StyledCheckboxHint, null, hint));
});
Checkbox.displayName = 'Checkbox';
Checkbox.defaultProps = {
  hint: undefined,
  className: undefined,
  sizeVariant: 'MEDIUM'
};

export { Checkbox as default };
