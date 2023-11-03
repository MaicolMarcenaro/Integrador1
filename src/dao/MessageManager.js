import messageModel from './modles/message.model.js';
// import { Exception } from '../utils.js';

export default class MessageManager{

    static get( query= {}){
        const criteria = {};

        return messageModel.find(criteria);
        
    }

    static async create(message, uid){
        await messageModel.create({"user": uid, "message":message})
        console.log('Mesage enviado')
    }
}