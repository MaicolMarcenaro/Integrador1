import { Router } from "express";
import MessageManager from "../../../dao/MessageManager.js";

const router = Router();


router.get('/message', async (req, res)=>{
    const messages = await MessageManager.get()
    res.render('messages',{messages : messages.map(m => m.toJSON())});
})

export default router