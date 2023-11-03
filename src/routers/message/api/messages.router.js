import {Router} from 'express';
import MessageManager from '../../../dao/MessageManager.js';

const router = Router();

router.get('/message', async(req, res)=>{
    const {query = {}} = req;
    const messages = await MessageManager.get(query);
    res.status(200).json(messages);
})

router.post('/message', async (req, res)=>{
    const {message, uid} = req.body;
    const newMessage = await MessageManager.create(message, uid)
    res.status(204).json(newMessage)
})

export default router;