import * as React from 'react';
import styled from 'styled-components';
import { FOCUS_COLOUR } from 'govuk-colours';
import { typography, spacing } from '@govuk-react/lib';
import HintText from '@govuk-react/hint-text';
import { SPACING_POINTS, MEDIA_QUERIES, FONT_SIZE, FOCUS_WIDTH, BORDER_WIDTH_FORM_ELEMENT, FOCUS_WIDTH_RAW } from '@govuk-react/constants';

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

const radioSize = SPACING_POINTS[7];
const radioSizeSmall = 24;
const labelPaddingLeftRight = SPACING_POINTS[3];
// When the default focus width is used on a curved edge it looks visually smaller.
// So for the circular radios we bump the default to make it look visually consistent.
const RADIOS_FOCUS_WIDTH = `${FOCUS_WIDTH_RAW + 1}px`;
const Label = styled('label').withConfig({
  displayName: "src__Label",
  componentId: "sc-9fy7us-0"
})(typography.font({
  size: 19
}), {
  display: 'block',
  position: 'relative',
  minHeight: radioSize,
  padding: `0 0 0 ${radioSize}px`,
  clear: 'left'
}, _ref => {
  let {
    inline
  } = _ref;
  return inline && {
    [MEDIA_QUERIES.LARGESCREEN]: {
      float: 'left',
      clear: 'none',
      marginRight: SPACING_POINTS[4]
    }
  };
}, _ref2 => {
  let {
    sizeVariant
  } = _ref2;
  return sizeVariant === 'SMALL' && {
    span: {
      padding: '12px 15px 13px 0',
      fontSize: FONT_SIZE.SIZE_16,
      [MEDIA_QUERIES.LARGESCREEN]: {
        fontSize: FONT_SIZE.SIZE_19,
        padding: `10px 15px 10px 1px`
      },
      ':after': {
        top: 15,
        left: 7,
        borderWidth: 5
      },
      ':before': {
        top: 8,
        width: radioSizeSmall,
        height: radioSizeSmall
      }
    }
  };
}, spacing.withWhiteSpace({
  marginBottom: 2
}));
const Input = styled('input').withConfig({
  displayName: "src__Input",
  componentId: "sc-9fy7us-1"
})({
  position: 'absolute',
  zIndex: 1,
  top: 0,
  left: 0,
  width: radioSize,
  height: radioSize,
  cursor: 'pointer',
  opacity: 0,
  ':checked + span::after': {
    opacity: 1
  },
  ':focus + span::before': {
    outline: `${FOCUS_WIDTH} solid transparent`,
    outlineOffset: FOCUS_WIDTH,
    boxShadow: `0 0 0 ${RADIOS_FOCUS_WIDTH} ${FOCUS_COLOUR}`
  }
}, _ref3 => {
  let {
    disabled
  } = _ref3;
  return {
    cursor: disabled ? 'auto' : 'pointer',
    ' + span': {
      opacity: disabled ? '.5' : '1',
      pointerEvents: disabled ? 'none' : 'auto'
    }
  };
});
const LabelText = styled('span').withConfig({
  displayName: "src__LabelText",
  componentId: "sc-9fy7us-2"
})({
  display: 'inline-block',
  marginBottom: 0,
  padding: `8px ${labelPaddingLeftRight}px ${SPACING_POINTS[1]}px`,
  cursor: 'pointer',
  MsTouchAction: 'manipulation',
  touchAction: 'manipulation',
  ':before': {
    content: "''",
    boxSizing: 'border-box',
    position: 'absolute',
    top: 0,
    left: 0,
    width: radioSize,
    height: radioSize,
    border: `${BORDER_WIDTH_FORM_ELEMENT} solid black`,
    borderRadius: '50%',
    background: 'transparent'
  },
  ':after': {
    content: "''",
    position: 'absolute',
    top: SPACING_POINTS[2],
    left: SPACING_POINTS[2],
    width: 0,
    height: 0,
    border: `${SPACING_POINTS[2]}px solid`,
    borderRadius: '50%',
    background: 'currentColor',
    opacity: 0
  }
});
const StyledRadioHint = styled(HintText).withConfig({
  displayName: "src__StyledRadioHint",
  componentId: "sc-9fy7us-3"
})({
  display: 'block',
  paddingLeft: labelPaddingLeftRight,
  paddingRight: labelPaddingLeftRight
});

/**
 * Use the radios component when users can only select one option from a list.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/radio
 * - https://design-system.service.gov.uk/components/radios/
 */
const Radio = /*#__PURE__*/React.forwardRef((_ref4, ref) => {
  let {
    inline,
    children,
    className,
    hint,
    sizeVariant,
    ...input
  } = _ref4;
  return /*#__PURE__*/React.createElement(Label, {
    inline: inline,
    className: className,
    sizeVariant: sizeVariant
  }, /*#__PURE__*/React.createElement(Input, _extends({
    type: "radio",
    ref: ref
  }, input)), /*#__PURE__*/React.createElement(LabelText, null, children), hint && /*#__PURE__*/React.createElement(StyledRadioHint, null, hint));
});
Radio.defaultProps = {
  hint: undefined,
  inline: false,
  className: undefined,
  sizeVariant: 'MEDIUM'
};
Radio.displayName = 'Radio';

export { Radio, Radio as default };
