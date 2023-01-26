import userResolvers from'./user.resolver';
import productResolvers from'./product.resolver';
import orderResolvers from'./order.resolver';

module.exports = {
  // modifier - the name of the type, and each time ANY mutation or subscription that returns a post, it will go through this modifier and apply these modifications
 
  Query: {
    ...userResolvers.Query,
    ...productResolvers.Query,
    ...orderResolvers.Query
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...productResolvers.Mutation,
    ...orderResolvers.Mutation
   
  }
 
};