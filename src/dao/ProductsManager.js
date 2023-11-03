import productsModel from './modles/product.model.js';
// import { Exception } from '../utils.js';

export default class ProductManager{

    static get( query= {}){

        return productsModel.find(query);
        
    }

    static async create(data) {
        const product = await productsModel.create(data);
        console.log('Producto creado correctamente 😁');
        return product;
      }
}