'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Label = require('@govuk-react/label');
var LabelText = require('@govuk-react/label-text');
var ErrorText = require('@govuk-react/error-text');
var HintText = require('@govuk-react/hint-text');
var Input = require('@govuk-react/input');

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
var Label__default = /*#__PURE__*/_interopDefault(Label);
var LabelText__default = /*#__PURE__*/_interopDefault(LabelText);
var ErrorText__default = /*#__PURE__*/_interopDefault(ErrorText);
var HintText__default = /*#__PURE__*/_interopDefault(HintText);
var Input__default = /*#__PURE__*/_interopDefault(Input);

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

/**
 * Use the text input component when you need to let users enter text that’s no longer than a single line, such as their name or phone number.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/input-field
 * - https://design-system.service.gov.uk/components/text-input/
 *
 */
const InputField = _ref => {
  let {
    meta,
    children,
    hint,
    input,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement(Label__default["default"], _extends({}, props, {
    error: meta.touched && !!meta.error
  }), /*#__PURE__*/React__namespace.createElement(LabelText__default["default"], null, children), hint && /*#__PURE__*/React__namespace.createElement(HintText__default["default"], null, hint), meta.touched && meta.error && /*#__PURE__*/React__namespace.createElement(ErrorText__default["default"], null, meta.error), /*#__PURE__*/React__namespace.createElement(Input__default["default"], _extends({
    error: meta.touched && !!meta.error
  }, input)));
};
InputField.defaultProps = {
  hint: undefined,
  input: {},
  meta: {}
};
InputField.displayName = 'InputField';

exports.InputField = InputField;
exports["default"] = InputField;
