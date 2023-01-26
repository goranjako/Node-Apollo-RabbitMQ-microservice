"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
const Schema = _mongoose.default.Schema;
const orderSchema = new Schema({
  user: {
    type: String,
    required: true
  },
  products: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
var _default = _mongoose.default.model('Order', orderSchema);
exports.default = _default;