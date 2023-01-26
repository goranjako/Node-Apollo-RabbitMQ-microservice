"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _graphqlTag = require("graphql-tag");
const product = (0, _graphqlTag.gql)`

  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    category: String!
  }
  extend type Query {
    productId(id:ID!):Product!
    products: [Product]!
  }
  input productInput {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    category: String!
  }
  type Message {
    message: String!
  }

type Mutation { 
  createProduct(input: productInput!): Message!
  deleteProduct(id: ID!): Message!
  updateProduct(id: ID!, input: productInput!): Message!
}

`;
var _default = product;
exports.default = _default;