import * as React from 'react';
import styled from 'styled-components';
import { GREY_2, WHITE, YELLOW, LIGHT_BLUE } from 'govuk-colours';
import { NTA_LIGHT } from '@govuk-react/constants';
import { Search } from '@govuk-react/icons';
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

// css normalize is hiding the input:search clear SearchButton
const Input = styled('input').withConfig({
  displayName: "src__Input",
  componentId: "sc-bgtefr-0"
})({
  width: '100%',
  height: '40px',
  padding: '6px',
  margin: 0,
  border: `solid 1px ${GREY_2}`,
  borderRight: 0,
  boxSizing: 'border-box',
  fontFamily: NTA_LIGHT,
  fontWeight: 400,
  textTransform: 'none',
  fontSize: '16px',
  lineHeight: '1.75',
  background: WHITE,
  borderRadius: 0,
  WebkitAppearance: 'none',
  ':focus': {
    marginRight: '3px',
    outline: `3px solid ${YELLOW}`,
    outlineOffset: 0,
    ' ~ button': {
      width: '46px'
    }
  }
});
Input.defaultProps = {
  type: 'search'
};
const SearchButton = styled('button').withConfig({
  displayName: "src__SearchButton",
  componentId: "sc-bgtefr-1"
})({
  backgroundColor: LIGHT_BLUE,
  border: 0,
  display: 'block',
  color: WHITE,
  position: 'relative',
  padding: '10px',
  width: '45px',
  height: '40px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '2px 50%',
  textIndent: '-999em',
  overflow: 'hidden',
  ':focus': {
    outline: `3px solid ${YELLOW}`,
    outlineOffset: 0
  }
});
const Button = props => /*#__PURE__*/React.createElement(SearchButton, _extends({
  title: "Search"
}, props), /*#__PURE__*/React.createElement(Search, {
  fill: WHITE
}));
const StyledSearchBox = styled('div').withConfig({
  displayName: "src__StyledSearchBox",
  componentId: "sc-bgtefr-2"
})({
  boxSizing: 'border-box',
  display: 'flex',
  width: '100%',
  background: WHITE
}, spacing.withWhiteSpace({
  marginBottom: 0
}));

/**
 * A search box with attached submit button.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/search-box
 * - https://components.publishing.service.gov.uk/component-guide/search
 */
const SearchBox = /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement(StyledSearchBox, _extends({}, props, {
  ref: ref
})));
SearchBox.Input = Input;
SearchBox.Button = Button;
SearchBox.displayName = 'SearchBox';
SearchBox.Input.displayName = 'SearchBox.Input';
SearchBox.Button.displayName = 'SearchBox.Button';

export { SearchBox, SearchBox as default };