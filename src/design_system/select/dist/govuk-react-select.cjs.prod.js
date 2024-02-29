'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var govukColours = require('govuk-colours');
var constants = require('@govuk-react/constants');
var lib = require('@govuk-react/lib');
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

const StyledSelect = styled__default["default"]('select').withConfig({
  displayName: "src__StyledSelect",
  componentId: "sc-sgud4a-0"
})(lib.typography.font({
  size: 19
}), {
  boxSizing: 'border-box',
  width: '100%',
  height: '33px',
  padding: '5px 4px 4px',
  border: `2px solid ${govukColours.BLACK}`,
  [constants.MEDIA_QUERIES.LARGESCREEN]: {
    width: '50%',
    height: '38px'
  },
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
 * The select component should only be used as a last resort in public-facing services because research shows that some users find selects very difficult to use.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/select
 * - https://design-system.service.gov.uk/components/select/
 */
const Select = _ref2 => {
  let {
    children,
    hint,
    label,
    meta,
    input,
    ...props
  } = _ref2;
  return /*#__PURE__*/React__namespace.createElement(Label__default["default"], _extends({}, props, {
    error: meta.touched && !!meta.error
  }), /*#__PURE__*/React__namespace.createElement(LabelText__default["default"], null, label), hint && /*#__PURE__*/React__namespace.createElement(HintText__default["default"], null, hint), meta.touched && meta.error && /*#__PURE__*/React__namespace.createElement(ErrorText__default["default"], null, meta.error), /*#__PURE__*/React__namespace.createElement(StyledSelect, _extends({
    error: meta.touched && !!meta.error
  }, input), children));
};
Select.defaultProps = {
  hint: undefined,
  errorText: undefined,
  input: {},
  meta: {}
};
Select.displayName = 'Select';
StyledSelect.displayName = 'SelectInput';

exports.Select = Select;
exports.SelectInput = StyledSelect;
exports["default"] = Select;
