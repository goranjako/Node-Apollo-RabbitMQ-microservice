import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    user: {
      type:String,
      required:true
    },
    products: {
        type:String,
      required:true
    },
    quantity: {
        type:Number,
      required:true
    },
    totalPrice: {
        type:Number,
      required:true
    },
  createdAt: {
    type: Date,
    
    default: Date.now
},
});

export default mongoose.model('Order', orderSchema);
