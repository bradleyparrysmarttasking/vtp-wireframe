'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var Label = require('@govuk-react/label');
var LabelText = require('@govuk-react/label-text');
var ErrorText = require('@govuk-react/error-text');
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

const StyledInput = styled__default["default"]('input').withConfig({
  displayName: "src__StyledInput",
  componentId: "sc-176u3do-0"
})({
  boxSizing: 'border-box',
  fontFamily: constants.NTA_LIGHT,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  fontWeight: 400,
  textTransform: 'none',
  fontSize: constants.FONT_SIZE.SIZE_14,
  lineHeight: constants.LINE_HEIGHT.SIZE_14,
  [constants.MEDIA_QUERIES.LARGESCREEN]: {
    fontSize: constants.FONT_SIZE.SIZE_16,
    lineHeight: constants.LINE_HEIGHT.SIZE_16,
    width: '50%'
  },
  width: '100%',
  padding: '5px 4px 4px'
});

/**
 * Help users select and upload a file.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/file-upload
 * - https://design-system.service.gov.uk/components/file-upload/
 */
const FileUpload = /*#__PURE__*/React__namespace.forwardRef((_ref, ref) => {
  let {
    meta,
    children,
    hint,
    acceptedFormats,
    onChange,
    name,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement(Label__default["default"], _extends({}, props, {
    error: meta.touched && !!meta.error
  }), /*#__PURE__*/React__namespace.createElement(LabelText__default["default"], null, children), hint && /*#__PURE__*/React__namespace.createElement(HintText__default["default"], null, hint), meta.touched && meta.error && /*#__PURE__*/React__namespace.createElement(ErrorText__default["default"], null, meta.error), /*#__PURE__*/React__namespace.createElement(StyledInput, {
    type: "file",
    accept: acceptedFormats,
    onChange: onChange,
    name: name,
    ref: ref
  }));
});
FileUpload.defaultProps = {
  hint: undefined,
  meta: {},
  acceptedFormats: undefined,
  onChange: undefined,
  name: undefined
};
FileUpload.displayName = 'FileUpload';

exports.FileUpload = FileUpload;
exports["default"] = FileUpload;