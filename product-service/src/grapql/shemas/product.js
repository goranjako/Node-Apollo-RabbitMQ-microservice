import {  gql } from 'graphql-tag';

const product = gql`

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
export default  product;