'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var govukColours = require('govuk-colours');
var constants = require('@govuk-react/constants');
var LabelText = require('@govuk-react/label-text');
var ErrorText = require('@govuk-react/error-text');
var HintText = require('@govuk-react/hint-text');
var lib = require('@govuk-react/lib');
var BaseInput = require('@govuk-react/input');
var Label = require('@govuk-react/label');
var multiInputInput = require('multi-input-input');

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
var BaseInput__default = /*#__PURE__*/_interopDefault(BaseInput);
var Label__default = /*#__PURE__*/_interopDefault(Label);
var multiInputInput__default = /*#__PURE__*/_interopDefault(multiInputInput);

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

const StyledLabel = styled__default["default"](Label__default["default"]).withConfig({
  displayName: "input__StyledLabel",
  componentId: "sc-una33r-0"
})({
  marginRight: '20px',
  marginBottom: 0
}, _ref => {
  let {
    year
  } = _ref;
  return {
    width: year ? '70px' : '50px'
  };
});
const StyledList = styled__default["default"]('div').withConfig({
  displayName: "input__StyledList",
  componentId: "sc-una33r-1"
})({
  display: 'flex'
});
class Input extends React__namespace.Component {
  static defaultProps = {
    value: undefined,
    names: {
      day: 'DateFieldDay',
      month: 'DateFieldMonth',
      year: 'DateFieldYear'
    },
    defaultValues: {
      day: undefined,
      month: undefined,
      year: undefined
    },
    inputs: {
      day: undefined,
      month: undefined,
      year: undefined
    },
    labels: {
      day: 'Day',
      month: 'Month',
      year: 'Year'
    },
    error: false,
    refs: undefined,
    onChange: undefined,
    onBlur: undefined,
    onFocus: undefined
  };
  inputs = {};
  renderInput(label, name, key, defaultValue, input, error) {
    const {
      value,
      onChange,
      onBlur,
      onFocus,
      refs
    } = this.props;
    return /*#__PURE__*/React__namespace.createElement(StyledLabel, {
      year: key === 'year'
    }, /*#__PURE__*/React__namespace.createElement(LabelText__default["default"], null, label), /*#__PURE__*/React__namespace.createElement(BaseInput__default["default"], _extends({
      name: name,
      error: !!error,
      defaultValue: defaultValue,
      value: value ? value[key] : undefined,
      onChange: e => onChange(e, key),
      onBlur: e => onBlur(e, key),
      onFocus: e => onFocus(e, key),
      ref: inputElement => {
        this.inputs[key] = inputElement;
        refs(this.inputs);
      }
    }, input)));
  }
  render() {
    const {
      labels,
      names,
      defaultValues,
      inputs,
      error
    } = this.props;
    return /*#__PURE__*/React__namespace.createElement(StyledList, null, this.renderInput(labels.day, names.day, 'day', defaultValues.day, inputs.day, error), this.renderInput(labels.month, names.month, 'month', defaultValues.month, inputs.month, error), this.renderInput(labels.year, names.year, 'year', defaultValues.year, inputs.year, error));
  }
}
// This component is dependent on multiInputInput HOC so we always export with HOC
var Input$1 = multiInputInput__default["default"](Input);

const StyledContainer = styled__default["default"]('div').withConfig({
  displayName: "src__StyledContainer",
  componentId: "sc-1l2t4xv-0"
})({
  display: 'flex',
  flexDirection: 'column'
}, _ref => {
  let {
    errorText
  } = _ref;
  return errorText ? {
    borderLeft: `4px solid ${govukColours.ERROR_COLOUR}`,
    marginRight: constants.SPACING.SCALE_3,
    paddingLeft: constants.SPACING.SCALE_2
  } : undefined;
}, lib.spacing.withWhiteSpace({
  marginBottom: 6
}));

/**
 * Use the date input component to help users enter a memorable date or one they can easily look up.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/date-field
 * - https://design-system.service.gov.uk/components/date-input/
 */
const DateField = _ref2 => {
  let {
    children,
    errorText,
    hintText,
    inputNames,
    defaultValues,
    inputs,
    input,
    ...props
  } = _ref2;
  return /*#__PURE__*/React__namespace.createElement(StyledContainer, _extends({}, props, {
    errorText: errorText
  }), /*#__PURE__*/React__namespace.createElement(LabelText__default["default"], null, children), hintText && /*#__PURE__*/React__namespace.createElement(HintText__default["default"], null, hintText), errorText && /*#__PURE__*/React__namespace.createElement(ErrorText__default["default"], null, errorText), /*#__PURE__*/React__namespace.createElement(Input$1, _extends({
    names: inputNames,
    defaultValues: defaultValues,
    error: !!errorText,
    inputs: inputs
  }, input)));
};
DateField.displayName = 'DateField';
DateField.Container = StyledContainer;
DateField.Input = Input$1;
DateField.defaultProps = {
  hintText: undefined,
  errorText: undefined,
  inputNames: {
    day: undefined,
    month: undefined,
    year: undefined
  },
  defaultValues: {
    day: undefined,
    month: undefined,
    year: undefined
  },
  inputs: {
    day: undefined,
    month: undefined,
    year: undefined
  },
  input: undefined
};

exports.DateField = DateField;
exports["default"] = DateField;
