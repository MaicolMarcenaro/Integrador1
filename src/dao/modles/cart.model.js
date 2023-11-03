import mongoose from "mongoose";

const cartsSchema = new mongoose.Schema({
    "products":{type:[{
        //product:{type:mongoose.Schema.Types.ObjectId, ref:'products'}
        product: { type:String },
        quantity: {type: Number}
    }], default : []}
},{timestamps:true})


export default mongoose.model('Cart', cartsSchema);