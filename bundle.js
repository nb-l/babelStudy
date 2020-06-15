"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _trimStart = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/trim-start"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _assign = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/assign"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

var array = [1, 2, 3, 4, 5, 6];
(0, _includes["default"])(array).call(array, function (item) {
  return item > 2;
});

var Robot = /*#__PURE__*/function () {
  function Robot(msg) {
    (0, _classCallCheck2["default"])(this, Robot);
    this.message = msg;
  }

  (0, _createClass2["default"])(Robot, [{
    key: "say",
    value: function say() {
      alertMe(this.message);
    }
  }]);
  return Robot;
}();

(0, _assign["default"])({}, {
  a: 1,
  b: 2
});

var fn = function fn() {
  return 1;
};

new _promise["default"]();
var m = '   dwdwd    ';
console.log((0, _trimStart["default"])(m).call(m));
