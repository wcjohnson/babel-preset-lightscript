"use strict";

var _isMatch2 = require("@oigroup/lightscript-runtime/isMatch");

var _isMatch3 = _interopRequireDefault(_isMatch2);

var _hasProps2 = require("@oigroup/lightscript-runtime/hasProps");

var _hasProps3 = _interopRequireDefault(_hasProps2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if ((0, _isMatch3.default)(a, x)) {
  b;
} else if ((0, _isMatch3.default)(f, x) && (0, _hasProps3.default)(x, "g")) {
  var _x = x,
      _g = _x.g;
  h;
}var i = function (_it) {
  if ((0, _isMatch3.default)(a, _it)) {
    return b;
  } else if ((0, _isMatch3.default)(f, _it) && (0, _hasProps3.default)(_it, "g")) {
    var _g2 = _it.g;
    return h;
  }
}(x);