import { gql } from "graphql-tag";
import order from "./order";



const base = gql`
  type Query {
    _: String!
  }

  type Mutation {
    _: String!
  }
`;
const typeDefs = [base,order];
export default typeDefs;
