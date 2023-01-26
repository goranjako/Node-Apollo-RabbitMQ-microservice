
import Order from '../../models/order';
import { GraphQLError } from 'graphql';
import authHeader from "../../config/auth";
import dotenv from "dotenv";
import RabbitMQ from "../../services/order.service";

dotenv.config();

export default {
  Query: {
    //getById
    orderId: async (parent, args, { req }) => {
     // await authHeader(req);
      try {
        const Order = await Order.findById({ _id: args.id });
        return Order;
      } catch (error) {
        throw new GraphQLError ("Order not found");
      }
    },
    //getAll
    orders: async (parent, args, { req }) => {
     // await authHeader(req);
      try {
        const Orders = await Order.find({});
        return Orders;
      } catch (error) {
        throw new GraphQLError ("Orders not found");
      }
    }
  },
  Mutation: {
   // Insert
  //delete
  deleteOrder: async (parent, { id }, { req }) => {
    //await authHeader(req);
    try {
      const Order = await Order.deleteOne({ _id: id });
      return { message: "Successful Delete Item" };
    } catch (error) {
      throw new GraphQLError("Item not found");
    }
  }
  }
};


