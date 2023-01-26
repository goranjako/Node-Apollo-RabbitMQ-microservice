import { gql } from "graphql-tag";
import user from "./shema";
import product from "./product";
import order from "./order";



const base = gql`
  type Query {
    _: String!
  }

  type Mutation {
    _: String!
  }
`;
const typeDefs = [base, user,product,order];
export default typeDefs;
