'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var govukColours = require('govuk-colours');
var constants = require('@govuk-react/constants');
var icons = require('@govuk-react/icons');
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
const Input = styled__default["default"]('input').withConfig({
  displayName: "src__Input",
  componentId: "sc-bgtefr-0"
})({
  width: '100%',
  height: '40px',
  padding: '6px',
  margin: 0,
  border: `solid 1px ${govukColours.GREY_2}`,
  borderRight: 0,
  boxSizing: 'border-box',
  fontFamily: constants.NTA_LIGHT,
  fontWeight: 400,
  textTransform: 'none',
  fontSize: '16px',
  lineHeight: '1.75',
  background: govukColours.WHITE,
  borderRadius: 0,
  WebkitAppearance: 'none',
  ':focus': {
    marginRight: '3px',
    outline: `3px solid ${govukColours.YELLOW}`,
    outlineOffset: 0,
    ' ~ button': {
      width: '46px'
    }
  }
});
Input.defaultProps = {
  type: 'search'
};
const SearchButton = styled__default["default"]('button').withConfig({
  displayName: "src__SearchButton",
  componentId: "sc-bgtefr-1"
})({
  backgroundColor: govukColours.LIGHT_BLUE,
  border: 0,
  display: 'block',
  color: govukColours.WHITE,
  position: 'relative',
  padding: '10px',
  width: '45px',
  height: '40px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '2px 50%',
  textIndent: '-999em',
  overflow: 'hidden',
  ':focus': {
    outline: `3px solid ${govukColours.YELLOW}`,
    outlineOffset: 0
  }
});
const Button = props => /*#__PURE__*/React__namespace.createElement(SearchButton, _extends({
  title: "Search"
}, props), /*#__PURE__*/React__namespace.createElement(icons.Search, {
  fill: govukColours.WHITE
}));
const StyledSearchBox = styled__default["default"]('div').withConfig({
  displayName: "src__StyledSearchBox",
  componentId: "sc-bgtefr-2"
})({
  boxSizing: 'border-box',
  display: 'flex',
  width: '100%',
  background: govukColours.WHITE
}, lib.spacing.withWhiteSpace({
  marginBottom: 0
}));

/**
 * A search box with attached submit button.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/search-box
 * - https://components.publishing.service.gov.uk/component-guide/search
 */
const SearchBox = /*#__PURE__*/React__namespace.forwardRef((props, ref) => /*#__PURE__*/React__namespace.createElement(StyledSearchBox, _extends({}, props, {
  ref: ref
})));
SearchBox.Input = Input;
SearchBox.Button = Button;
SearchBox.displayName = 'SearchBox';
SearchBox.Input.displayName = 'SearchBox.Input';
SearchBox.Button.displayName = 'SearchBox.Button';

exports.SearchBox = SearchBox;
exports["default"] = SearchBox;