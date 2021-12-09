"use strict";
var a = {
  valueOf: function () {
    return "hello";
  },
};
var b = {
  valueOf: function () {
    return 3;
  },
};
var c = {
  valueOf: function () {
    return new Number(3);
  },
};
var d = {
  toString: function () {
    return 123;
  },
};
var e = {
  toString: function () {
    return new Number(3);
  },
};

// null + undefined        output NaN
// null + true             output   1
// null + false             output 0
// null + 3                 output   3
// null + NaN               output NaN
// null + 'hello'            olutput nullhello
