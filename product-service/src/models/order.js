import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
  createdAt: {
    type: Date,
    
    default: Date.now
},
});

export default mongoose.model('Order', orderSchema);