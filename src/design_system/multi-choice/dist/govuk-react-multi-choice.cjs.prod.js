'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var govukColours = require('govuk-colours');
var LabelText = require('@govuk-react/label-text');
var ErrorText = require('@govuk-react/error-text');
var HintText = require('@govuk-react/hint-text');
var constants = require('@govuk-react/constants');
var lib = require('@govuk-react/lib');

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

const StyledFieldset = styled__default["default"]('div').withConfig({
  displayName: "src__StyledFieldset",
  componentId: "sc-g1up10-0"
})({
  padding: 0,
  margin: 0,
  border: 0,
  boxSizing: 'border-box',
  width: '100%',
  ':after': {
    content: "''",
    display: 'table',
    clear: 'both'
  }
}, _ref => {
  let {
    error
  } = _ref;
  return {
    borderLeft: error ? `${constants.BORDER_WIDTH_MOBILE} solid ${govukColours.ERROR_COLOUR}` : undefined,
    marginRight: error ? constants.SPACING.SCALE_3 : undefined,
    paddingLeft: error ? constants.SPACING.SCALE_2 : undefined
  };
}, lib.spacing.withWhiteSpace({
  marginBottom: 0
}));

/**
 * For wrapping a set of radio buttons with a label, optional hint and optional error.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/multi-choice
 * - https://design-system.service.gov.uk/components/radios/
 */
const MultiChoice = _ref2 => {
  let {
    meta,
    label,
    children,
    hint,
    ...props
  } = _ref2;
  return /*#__PURE__*/React__namespace.createElement(StyledFieldset, _extends({
    error: meta.touched && !!meta.error
  }, props), /*#__PURE__*/React__namespace.createElement(LabelText__default["default"], null, label), hint && /*#__PURE__*/React__namespace.createElement(HintText__default["default"], null, hint), meta.touched && meta.error && /*#__PURE__*/React__namespace.createElement(ErrorText__default["default"], null, meta.error), children);
};
MultiChoice.defaultProps = {
  hint: undefined,
  meta: {}
};
MultiChoice.displayName = 'MultiChoice';

exports.MultiChoice = MultiChoice;
exports["default"] = MultiChoice;
