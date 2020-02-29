"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var r = {};

  function t(n) {
    if (r[n]) return r[n].exports;
    var o = r[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports;
  }

  t.m = e, t.c = r, t.d = function (e, r, n) {
    t.o(e, r) || Object.defineProperty(e, r, {
      enumerable: !0,
      get: n
    });
  }, t.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, t.t = function (e, r) {
    if (1 & r && (e = t(e)), 8 & r) return e;
    if (4 & r && "object" == _typeof(e) && e && e.__esModule) return e;
    var n = Object.create(null);
    if (t.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & r && "string" != typeof e) for (var o in e) {
      t.d(n, o, function (r) {
        return e[r];
      }.bind(null, o));
    }
    return n;
  }, t.n = function (e) {
    var r = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return t.d(r, "a", r), r;
  }, t.o = function (e, r) {
    return Object.prototype.hasOwnProperty.call(e, r);
  }, t.p = "", t(t.s = 2);
}([function (e, r) {
  $(document).ready(function () {
    $(".js-lazy").each(function (e, r) {
      var t = $(r),
          n = t.attr("data-src");
      t.attr("src", n);
    });
  });
}, function (e, r) {
  $(".multiple-items").slick({
    infinite: !0,
    slidesToShow: 3,
    slidesToScroll: 3
  }), $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: !1,
    fade: !0,
    asNavFor: ".slider-nav"
  }), $(".slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: !1,
    centerMode: !0,
    focusOnSelect: !0
  });
}, function (e, r, t) {
  "use strict";

  t.r(r);
  var n = t(0),
      o = t.n(n),
      i = t(1),
      l = t.n(i);
  $(document).ready(function () {
    o()(), l()();
  });
}]);