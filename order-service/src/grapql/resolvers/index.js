
import orderResolvers from'./order.resolver';

module.exports = {
  // modifier - the name of the type, and each time ANY mutation or subscription that returns a post, it will go through this modifier and apply these modifications
 
  Query: {
   
    ...orderResolvers.Query
  },
  Mutation: {
  
    ...orderResolvers.Mutation
   
  }
 
};