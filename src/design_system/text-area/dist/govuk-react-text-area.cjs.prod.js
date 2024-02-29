'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var govukColours = require('govuk-colours');
var constants = require('@govuk-react/constants');
var Label = require('@govuk-react/label');
var LabelText = require('@govuk-react/label-text');
var ErrorText = require('@govuk-react/error-text');
var HintText = require('@govuk-react/hint-text');

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
var Label__default = /*#__PURE__*/_interopDefault(Label);
var LabelText__default = /*#__PURE__*/_interopDefault(LabelText);
var ErrorText__default = /*#__PURE__*/_interopDefault(ErrorText);
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

const TextAreaField = styled__default["default"]('textarea').withConfig({
  displayName: "src__TextAreaField",
  componentId: "sc-z0ua7p-0"
})({
  boxSizing: 'border-box',
  fontFamily: constants.NTA_LIGHT,
  fontWeight: 400,
  textTransform: 'none',
  fontSize: constants.FONT_SIZE.SIZE_16,
  lineHeight: constants.LINE_HEIGHT.SIZE_16,
  [constants.MEDIA_QUERIES.LARGESCREEN]: {
    fontSize: constants.FONT_SIZE.SIZE_19,
    lineHeight: constants.LINE_HEIGHT.SIZE_19,
    width: '75%'
  },
  width: '100%',
  padding: '5px 4px 4px',
  border: `2px solid ${govukColours.BLACK}`,
  ':focus': {
    outline: `3px solid ${govukColours.YELLOW}`,
    outlineOffset: 0
  }
}, _ref => {
  let {
    error
  } = _ref;
  return {
    border: error ? `4px solid ${govukColours.ERROR_COLOUR}` : undefined
  };
});

/**
 * Use the textarea component when you need to let users enter an amount of text that’s longer than a single line.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/text-area
 * - https://design-system.service.gov.uk/components/textarea/
 */
const TextArea = _ref2 => {
  let {
    children,
    hint,
    meta,
    input,
    ...props
  } = _ref2;
  return /*#__PURE__*/React__namespace.createElement(Label__default["default"], _extends({
    error: meta.touched && !!meta.error
  }, props), /*#__PURE__*/React__namespace.createElement(LabelText__default["default"], null, children), hint && /*#__PURE__*/React__namespace.createElement(HintText__default["default"], null, hint), meta.touched && meta.error && /*#__PURE__*/React__namespace.createElement(ErrorText__default["default"], null, meta.error), /*#__PURE__*/React__namespace.createElement(TextAreaField, _extends({
    rows: 5,
    error: meta.touched && !!meta.error
  }, input)));
};
TextArea.defaultProps = {
  hint: undefined,
  input: {},
  meta: {}
};
TextArea.displayName = 'TextArea';

exports.TextArea = TextArea;
exports.TextAreaField = TextAreaField;
exports["default"] = TextArea;
