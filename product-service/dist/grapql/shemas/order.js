"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _graphqlTag = require("graphql-tag");
const order = (0, _graphqlTag.gql)`

  type Order {
    id: ID!
    user: String!
    products: String!
    quantity: Int!
    totalPrice: Float!
  }

  extend type Query {
    orderId(id:ID!):Order!
    orders: [Order]!
  }

  input orderInput {
    user: String!
    products: String!
    quantity: Int!
    totalPrice: Float!
  }
  type Message {
    message: String!
  }

type Mutation { 
  createOrder(input: orderInput!): Message!
  deleteOrder(id: ID!): Message!
}

`;
var _default = order;
exports.default = _default;