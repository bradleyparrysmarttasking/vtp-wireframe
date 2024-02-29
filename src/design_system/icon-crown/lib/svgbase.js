"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excluded = ["children", "fill", "title", "className"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var SVG = function SVG(_ref) {
  var children = _ref.children,
      fill = _ref.fill,
      title = _ref.title,
      className = _ref.className,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    className: className,
    style: {
      display: "block"
    },
    fill: fill
  }, rest), /*#__PURE__*/_react["default"].createElement("title", null, title), children);
};

SVG.propTypes = {
  children: _propTypes["default"].node.isRequired,
  className: _propTypes["default"].string,
  title: _propTypes["default"].string,
  fill: _propTypes["default"].string
};
SVG.defaultProps = {
  className: undefined,
  title: undefined,
  fill: "currentColor"
};
var _default = SVG;
exports["default"] = _default;
module.exports = exports.default;
//# sourceMappingURL=svgbase.js.map