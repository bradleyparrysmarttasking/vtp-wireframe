import * as React from 'react';
import Label from '@govuk-react/label';
import LabelText from '@govuk-react/label-text';
import ErrorText from '@govuk-react/error-text';
import HintText from '@govuk-react/hint-text';
import Input from '@govuk-react/input';

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
  return /*#__PURE__*/React.createElement(Label, _extends({}, props, {
    error: meta.touched && !!meta.error
  }), /*#__PURE__*/React.createElement(LabelText, null, children), hint && /*#__PURE__*/React.createElement(HintText, null, hint), meta.touched && meta.error && /*#__PURE__*/React.createElement(ErrorText, null, meta.error), /*#__PURE__*/React.createElement(Input, _extends({
    error: meta.touched && !!meta.error
  }, input)));
};
InputField.defaultProps = {
  hint: undefined,
  input: {},
  meta: {}
};
InputField.displayName = 'InputField';

export { InputField, InputField as default };
