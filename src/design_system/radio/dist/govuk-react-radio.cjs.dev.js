'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var govukColours = require('govuk-colours');
var lib = require('@govuk-react/lib');
var HintText = require('@govuk-react/hint-text');
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
var HintText__default = /*#__PURE__*/_interopDefault(HintText);

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

const radioSize = constants.SPACING_POINTS[7];
const radioSizeSmall = 24;
const labelPaddingLeftRight = constants.SPACING_POINTS[3];
// When the default focus width is used on a curved edge it looks visually smaller.
// So for the circular radios we bump the default to make it look visually consistent.
const RADIOS_FOCUS_WIDTH = `${constants.FOCUS_WIDTH_RAW + 1}px`;
const Label = styled__default["default"]('label').withConfig({
  displayName: "src__Label",
  componentId: "sc-9fy7us-0"
})(lib.typography.font({
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
    [constants.MEDIA_QUERIES.LARGESCREEN]: {
      float: 'left',
      clear: 'none',
      marginRight: constants.SPACING_POINTS[4]
    }
  };
}, _ref2 => {
  let {
    sizeVariant
  } = _ref2;
  return sizeVariant === 'SMALL' && {
    span: {
      padding: '12px 15px 13px 0',
      fontSize: constants.FONT_SIZE.SIZE_16,
      [constants.MEDIA_QUERIES.LARGESCREEN]: {
        fontSize: constants.FONT_SIZE.SIZE_19,
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
}, lib.spacing.withWhiteSpace({
  marginBottom: 2
}));
const Input = styled__default["default"]('input').withConfig({
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
    outline: `${constants.FOCUS_WIDTH} solid transparent`,
    outlineOffset: constants.FOCUS_WIDTH,
    boxShadow: `0 0 0 ${RADIOS_FOCUS_WIDTH} ${govukColours.FOCUS_COLOUR}`
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
const LabelText = styled__default["default"]('span').withConfig({
  displayName: "src__LabelText",
  componentId: "sc-9fy7us-2"
})({
  display: 'inline-block',
  marginBottom: 0,
  padding: `8px ${labelPaddingLeftRight}px ${constants.SPACING_POINTS[1]}px`,
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
    border: `${constants.BORDER_WIDTH_FORM_ELEMENT} solid black`,
    borderRadius: '50%',
    background: 'transparent'
  },
  ':after': {
    content: "''",
    position: 'absolute',
    top: constants.SPACING_POINTS[2],
    left: constants.SPACING_POINTS[2],
    width: 0,
    height: 0,
    border: `${constants.SPACING_POINTS[2]}px solid`,
    borderRadius: '50%',
    background: 'currentColor',
    opacity: 0
  }
});
const StyledRadioHint = styled__default["default"](HintText__default["default"]).withConfig({
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
const Radio = /*#__PURE__*/React__namespace.forwardRef((_ref4, ref) => {
  let {
    inline,
    children,
    className,
    hint,
    sizeVariant,
    ...input
  } = _ref4;
  return /*#__PURE__*/React__namespace.createElement(Label, {
    inline: inline,
    className: className,
    sizeVariant: sizeVariant
  }, /*#__PURE__*/React__namespace.createElement(Input, _extends({
    type: "radio",
    ref: ref
  }, input)), /*#__PURE__*/React__namespace.createElement(LabelText, null, children), hint && /*#__PURE__*/React__namespace.createElement(StyledRadioHint, null, hint));
});
Radio.defaultProps = {
  hint: undefined,
  inline: false,
  className: undefined,
  sizeVariant: 'MEDIUM'
};
Radio.displayName = 'Radio';

exports.Radio = Radio;
exports["default"] = Radio;
