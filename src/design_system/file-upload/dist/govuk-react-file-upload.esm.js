import * as React from 'react';
import styled from 'styled-components';
import Label from '@govuk-react/label';
import LabelText from '@govuk-react/label-text';
import ErrorText from '@govuk-react/error-text';
import HintText from '@govuk-react/hint-text';
import { NTA_LIGHT, FONT_SIZE, LINE_HEIGHT, MEDIA_QUERIES } from '@govuk-react/constants';

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

const StyledInput = styled('input').withConfig({
  displayName: "src__StyledInput",
  componentId: "sc-176u3do-0"
})({
  boxSizing: 'border-box',
  fontFamily: NTA_LIGHT,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  fontWeight: 400,
  textTransform: 'none',
  fontSize: FONT_SIZE.SIZE_14,
  lineHeight: LINE_HEIGHT.SIZE_14,
  [MEDIA_QUERIES.LARGESCREEN]: {
    fontSize: FONT_SIZE.SIZE_16,
    lineHeight: LINE_HEIGHT.SIZE_16,
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
const FileUpload = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    meta,
    children,
    hint,
    acceptedFormats,
    onChange,
    name,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(Label, _extends({}, props, {
    error: meta.touched && !!meta.error
  }), /*#__PURE__*/React.createElement(LabelText, null, children), hint && /*#__PURE__*/React.createElement(HintText, null, hint), meta.touched && meta.error && /*#__PURE__*/React.createElement(ErrorText, null, meta.error), /*#__PURE__*/React.createElement(StyledInput, {
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

export { FileUpload, FileUpload as default };
