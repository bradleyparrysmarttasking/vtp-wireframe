import * as React from 'react';
import styled from 'styled-components';
import { ERROR_COLOUR } from 'govuk-colours';
import { SPACING } from '@govuk-react/constants';
import LabelText from '@govuk-react/label-text';
import ErrorText from '@govuk-react/error-text';
import HintText from '@govuk-react/hint-text';
import { spacing } from '@govuk-react/lib';
import BaseInput from '@govuk-react/input';
import Label from '@govuk-react/label';
import multiInputInput from 'multi-input-input';

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

const StyledLabel = styled(Label).withConfig({
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
const StyledList = styled('div').withConfig({
  displayName: "input__StyledList",
  componentId: "sc-una33r-1"
})({
  display: 'flex'
});
class Input extends React.Component {
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
    return /*#__PURE__*/React.createElement(StyledLabel, {
      year: key === 'year'
    }, /*#__PURE__*/React.createElement(LabelText, null, label), /*#__PURE__*/React.createElement(BaseInput, _extends({
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
    return /*#__PURE__*/React.createElement(StyledList, null, this.renderInput(labels.day, names.day, 'day', defaultValues.day, inputs.day, error), this.renderInput(labels.month, names.month, 'month', defaultValues.month, inputs.month, error), this.renderInput(labels.year, names.year, 'year', defaultValues.year, inputs.year, error));
  }
}
// This component is dependent on multiInputInput HOC so we always export with HOC
var Input$1 = multiInputInput(Input);

const StyledContainer = styled('div').withConfig({
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
    borderLeft: `4px solid ${ERROR_COLOUR}`,
    marginRight: SPACING.SCALE_3,
    paddingLeft: SPACING.SCALE_2
  } : undefined;
}, spacing.withWhiteSpace({
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
  return /*#__PURE__*/React.createElement(StyledContainer, _extends({}, props, {
    errorText: errorText
  }), /*#__PURE__*/React.createElement(LabelText, null, children), hintText && /*#__PURE__*/React.createElement(HintText, null, hintText), errorText && /*#__PURE__*/React.createElement(ErrorText, null, errorText), /*#__PURE__*/React.createElement(Input$1, _extends({
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

export { DateField, DateField as default };
