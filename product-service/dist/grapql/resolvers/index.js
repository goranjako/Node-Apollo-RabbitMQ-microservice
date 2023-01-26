"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _user = _interopRequireDefault(require("./user.resolver"));
var _product = _interopRequireDefault(require("./product.resolver"));
var _order = _interopRequireDefault(require("./order.resolver"));
module.exports = {
  // modifier - the name of the type, and each time ANY mutation or subscription that returns a post, it will go through this modifier and apply these modifications

  Query: {
    ..._user.default.Query,
    ..._product.default.Query,
    ..._order.default.Query
  },
  Mutation: {
    ..._user.default.Mutation,
    ..._product.default.Mutation,
    ..._order.default.Mutation
  }
};