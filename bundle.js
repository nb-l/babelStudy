"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var array = [1, 2, 3, 4, 5, 6];
array.includes(function (item) {
  return item > 2;
});

var Robot = /*#__PURE__*/function () {
  function Robot(msg) {
    _classCallCheck(this, Robot);

    this.message = msg;
  }

  _createClass(Robot, [{
    key: "say",
    value: function say() {
      alertMe(this.message);
    }
  }]);

  return Robot;
}();

Object.assign({}, {
  a: 1,
  b: 2
});

var fn = function fn() {
  return 1;
};

new Promise();
var m = '   dwdwd    ';
console.log(m.trimStart());
