"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _graphqlTag = require("graphql-tag");
var _order = _interopRequireDefault(require("./order"));
const base = (0, _graphqlTag.gql)`
  type Query {
    _: String!
  }

  type Mutation {
    _: String!
  }
`;
const typeDefs = [base, _order.default];
var _default = typeDefs;
exports.default = _default;