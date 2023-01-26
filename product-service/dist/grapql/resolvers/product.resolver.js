"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _product = _interopRequireDefault(require("../../models/product"));
var _graphql = require("graphql");
var _auth = _interopRequireDefault(require("../../config/auth"));
var _verify = require("../../config/verify");
var _dotenv = _interopRequireDefault(require("dotenv"));
_dotenv.default.config();
var _default = {
  Query: {
    //getById
    productId: async (parent, args, {
      req
    }) => {
      // await authHeader(req);
      try {
        const product = await _product.default.findById({
          _id: args.id
        });
        return product;
      } catch (error) {
        throw new _graphql.GraphQLError("Product not found");
      }
    },
    //getAll
    products: async (parent, args, {
      req
    }) => {
      // await authHeader(req);
      try {
        const products = await _product.default.find({});
        return products;
      } catch (error) {
        throw new _graphql.GraphQLError("Products not found");
      }
    }
  },
  Mutation: {
    // Insert
    createProduct: async (paren, {
      input
    }, {
      req
    }) => {
      //await authHeader(req);
      try {
        await _verify.productValid.validate(input, {
          abortEarly: false
        });
        const product = new _product.default({
          name: input.name,
          description: input.description,
          quantity: input.quantity,
          price: input.price,
          category: input.category
        });
        const result = await product.save();
        return {
          message: "Successful Create Product"
        };
      } catch (err) {
        throw new _graphql.GraphQLError(err.message);
      }
    },
    //delete
    deleteProduct: async (parent, {
      id
    }, {
      req
    }) => {
      //await authHeader(req);
      try {
        const product = await _product.default.deleteOne({
          _id: id
        });
        return {
          message: "Successful Delete Item"
        };
      } catch (error) {
        throw new _graphql.GraphQLError("Item not found");
      }
    },
    //update
    updateProduct: async (parent, {
      id,
      input
    }, {
      req
    }) => {
      //await authHeader(req);
      try {
        await _verify.productValid.validate(input, {
          abortEarly: false
        });
        const product = await _product.default.findById({
          _id: id
        }).exec();
        product.set(input);
        const result = await product.save();
        return {
          message: "Successful Update Product"
        };
      } catch (error) {
        throw new _graphql.GraphQLError("Product not found");
      }
    }
  }
};
exports.default = _default;