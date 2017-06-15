"use strict";

function _hasProps(obj) { if (obj == null) return false; if (typeof obj !== "object" && typeof obj !== "function") return false; for (var i = arguments.length - 1; i > 0; i--) { if (!(arguments[i] in obj)) return false; } return true; }

if (a) {
  b;
} else if (f && _hasProps(x, "g")) {
  var _x = x,
      _g = _x.g;
  h;
}var i = function (it) {
  if (a) {
    return b;
  } else if (f && _hasProps(it, "g")) {
    var _g2 = it.g;
    return h;
  }
}(x);