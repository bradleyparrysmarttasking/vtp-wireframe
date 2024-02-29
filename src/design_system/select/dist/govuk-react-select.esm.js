import * as React from 'react';
import styled from 'styled-components';
import { BLACK, YELLOW, ERROR_COLOUR } from 'govuk-colours';
import { MEDIA_QUERIES } from '@govuk-react/constants';
import { typography } from '@govuk-react/lib';
import Label from '@govuk-react/label';
import LabelText from '@govuk-react/label-text';
import ErrorText from '@govuk-react/error-text';
import HintText from '@govuk-react/hint-text';

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

const StyledSelect = styled('select').withConfig({
  displayName: "src__StyledSelect",
  componentId: "sc-sgud4a-0"
})(typography.font({
  size: 19
}), {
  boxSizing: 'border-box',
  width: '100%',
  height: '33px',
  padding: '5px 4px 4px',
  border: `2px solid ${BLACK}`,
  [MEDIA_QUERIES.LARGESCREEN]: {
    width: '50%',
    height: '38px'
  },
  ':focus': {
    outline: `3px solid ${YELLOW}`,
    outlineOffset: 0
  }
}, _ref => {
  let {
    error
  } = _ref;
  return {
    border: error ? `4px solid ${ERROR_COLOUR}` : undefined
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
  return /*#__PURE__*/React.createElement(Label, _extends({}, props, {
    error: meta.touched && !!meta.error
  }), /*#__PURE__*/React.createElement(LabelText, null, label), hint && /*#__PURE__*/React.createElement(HintText, null, hint), meta.touched && meta.error && /*#__PURE__*/React.createElement(ErrorText, null, meta.error), /*#__PURE__*/React.createElement(StyledSelect, _extends({
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

export { Select, StyledSelect as SelectInput, Select as default };
