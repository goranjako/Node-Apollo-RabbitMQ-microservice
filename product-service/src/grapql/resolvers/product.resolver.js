
import Product from '../../models/product';
import { GraphQLError } from 'graphql';
import authHeader from "../../config/auth";
import { productValid } from "../../config/verify";
import dotenv from "dotenv";
dotenv.config();

export default {
  Query: {
    //getById
    productId: async (parent, args, { req }) => {
      await authHeader(req);
      try {
        const product = await Product.findById({ _id: args.id });
        return product;
      } catch (error) {
        throw new GraphQLError ("Product not found");
      }
    },
    //getAll
    products: async (parent, args, { req }) => {
      await authHeader(req);
      try {
        const products = await Product.find({});
        return products;
      } catch (error) {
        throw new GraphQLError ("Products not found");
      }
    }
  },
  Mutation: {
   // Insert
   createProduct: async (paren, { input }, {req}) => {
    await authHeader(req);
    try {
      await productValid.validate(input, { abortEarly: false });
      const product = new Product({
        name: input.name,
        description:input.description,
        quantity:input.quantity,
        price:input.price,
        category: input.category
      });
      const result = await product.save();
      return { message: "Successful Create Product" };
    } catch (err) {
      throw new  GraphQLError(err.message);
    }
  },
  //delete
  deleteProduct: async (parent, { id }, { req }) => {
    await authHeader(req);
    try {
      const product = await Product.deleteOne({ _id: id });
      return { message: "Successful Delete Item" };
    } catch (error) {
      throw new GraphQLError("Item not found");
    }
  },
  //update
  updateProduct: async (parent, { id, input }, { req }) => {
    await authHeader(req);
    try {
      await productValid.validate(input, { abortEarly: false });
      const product = await Product.findById({ _id: id }).exec();
      product.set(input);
      const result = await product.save();
      return { message: "Successful Update Product" };
    } catch (error) {
      throw new GraphQLError("Product not found");
    }
  },
},
};