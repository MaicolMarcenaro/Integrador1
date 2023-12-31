import cartModel from './modles/cart.model.js';
// import { Exception } from '../utils.js';

export default class CartsManager{

    static get( query= {}){
        const criteria = {};
        return cartModel.find(criteria)//.populate('products.product');  
    }

    static async create(data) {
        try {
            const cart = await cartModel.create(data);
            console.log('Carrito creado correctamente 😁');
            return cart;
        } catch (error) {
            console.log({"Error:": error})
        }
      }

    static async getById(cid) {
        try {
            const cart = await cartModel.findById(cid);
            if (!cart) {
                throw new Error('No existe el carrito 😨');
            }
            return cart;
            
        } catch (error) {
            console.log("error", error)
        }
    }
    


    static async updateById(cid, data) {
    const cart = await cartModel.findById(cid);
    if (!cart) {
        throw new Error('No existe el carrito 😨');
    }
    try {
        const criteria = { _id: cid };
        const operation = { $set: data} ;
        await cartModel.updateOne(criteria, operation);
        console.log('Carrito actualizado correctamente 😁');
    }catch (error) {
        console.log("error", error)
    }
}
    static async deleteById(cid) {
    const cart = await cartModel.findById(cid);
    if (!cart) {
        throw new Error('No existe el carrito 😨');
    }
    const criteria = { _id: cid };
    await cartModel.deleteOne(criteria);
    console.log('Carrito eliminado correctamente 😑');
    }

    static async addProduct(cid, pid, quantity){
        const cart = await cartModel.findById(cid);
        const indexProduct = cart.products.findIndex((prd)=>String(prd.product)===pid)

        if (indexProduct === -1) {
            cart.products.push({"product": pid , "quantity" : quantity})
        } else {
            cart.products[indexProduct].quantity += quantity
        }

        await cartModel.updateOne({_id: cid}, cart)
    }
}