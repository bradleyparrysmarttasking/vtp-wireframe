import * as React from 'react';
import styled from 'styled-components';
import { BLACK, YELLOW, ERROR_COLOUR } from 'govuk-colours';
import { NTA_LIGHT, FONT_SIZE, LINE_HEIGHT, MEDIA_QUERIES } from '@govuk-react/constants';
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

const TextAreaField = styled('textarea').withConfig({
  displayName: "src__TextAreaField",
  componentId: "sc-z0ua7p-0"
})({
  boxSizing: 'border-box',
  fontFamily: NTA_LIGHT,
  fontWeight: 400,
  textTransform: 'none',
  fontSize: FONT_SIZE.SIZE_16,
  lineHeight: LINE_HEIGHT.SIZE_16,
  [MEDIA_QUERIES.LARGESCREEN]: {
    fontSize: FONT_SIZE.SIZE_19,
    lineHeight: LINE_HEIGHT.SIZE_19,
    width: '75%'
  },
  width: '100%',
  padding: '5px 4px 4px',
  border: `2px solid ${BLACK}`,
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
  return /*#__PURE__*/React.createElement(Label, _extends({
    error: meta.touched && !!meta.error
  }, props), /*#__PURE__*/React.createElement(LabelText, null, children), hint && /*#__PURE__*/React.createElement(HintText, null, hint), meta.touched && meta.error && /*#__PURE__*/React.createElement(ErrorText, null, meta.error), /*#__PURE__*/React.createElement(TextAreaField, _extends({
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

export { TextArea, TextAreaField, TextArea as default };
