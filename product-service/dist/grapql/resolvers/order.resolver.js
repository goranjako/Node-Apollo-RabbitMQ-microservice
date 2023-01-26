"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _order = _interopRequireDefault(require("../../models/order"));
var _graphql = require("graphql");
var _auth = _interopRequireDefault(require("../../config/auth"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _order2 = _interopRequireDefault(require("../../services/order.service"));
_dotenv.default.config();
var _default = {
  Query: {
    //getById
    orderId: async (parent, args, {
      req
    }) => {
      // await authHeader(req);
      try {
        const Order = await Order.findById({
          _id: args.id
        });
        return Order;
      } catch (error) {
        throw new _graphql.GraphQLError("Order not found");
      }
    },
    //getAll
    orders: async (parent, args, {
      req
    }) => {
      // await authHeader(req);
      try {
        const Orders = await _order.default.find({});
        return Orders;
      } catch (error) {
        throw new _graphql.GraphQLError("Orders not found");
      }
    }
  },
  Mutation: {
    // Insert
    createOrder: async (paren, {
      input
    }, {
      req
    }) => {
      //await authHeader(req);
      let data = input;
      try {
        if (!data) {
          return {
            message: "Order does not exist!"
          };
        }
        await _order2.default.Create("Order", data);
        await _order2.default.Consume("Product", req);
        return {
          message: "Order Created"
        };
      } catch (err) {
        throw new _graphql.GraphQLError(err.message);
      }
    },
    //delete
    deleteOrder: async (parent, {
      id
    }, {
      req
    }) => {
      //await authHeader(req);
      try {
        const Order = await Order.deleteOne({
          _id: id
        });
        return {
          message: "Successful Delete Item"
        };
      } catch (error) {
        throw new _graphql.GraphQLError("Item not found");
      }
    }
  }
};
exports.default = _default;