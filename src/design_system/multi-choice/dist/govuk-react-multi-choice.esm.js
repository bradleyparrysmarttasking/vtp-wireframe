import * as React from 'react';
import styled from 'styled-components';
import { ERROR_COLOUR } from 'govuk-colours';
import LabelText from '@govuk-react/label-text';
import ErrorText from '@govuk-react/error-text';
import HintText from '@govuk-react/hint-text';
import { BORDER_WIDTH_MOBILE, SPACING } from '@govuk-react/constants';
import { spacing } from '@govuk-react/lib';

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

const StyledFieldset = styled('div').withConfig({
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
    borderLeft: error ? `${BORDER_WIDTH_MOBILE} solid ${ERROR_COLOUR}` : undefined,
    marginRight: error ? SPACING.SCALE_3 : undefined,
    paddingLeft: error ? SPACING.SCALE_2 : undefined
  };
}, spacing.withWhiteSpace({
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
  return /*#__PURE__*/React.createElement(StyledFieldset, _extends({
    error: meta.touched && !!meta.error
  }, props), /*#__PURE__*/React.createElement(LabelText, null, label), hint && /*#__PURE__*/React.createElement(HintText, null, hint), meta.touched && meta.error && /*#__PURE__*/React.createElement(ErrorText, null, meta.error), children);
};
MultiChoice.defaultProps = {
  hint: undefined,
  meta: {}
};
MultiChoice.displayName = 'MultiChoice';

export { MultiChoice, MultiChoice as default };
