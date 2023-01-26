import {  gql } from 'graphql-tag';

const order = gql`

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
    userId: String!
    productId: String!
  }
  type Message {
    message: String!
  }

type Mutation { 
  deleteOrder(id: ID!): Message!
}

`;
export default  order;