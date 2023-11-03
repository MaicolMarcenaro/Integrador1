import { Router } from "express";
import CartsManager from "../../../dao/CartsManager.js";

const router = Router();


router.get('/carts', async (req, res)=>{
    const carts = await CartsManager.get()
    res.render('carts',{carts : carts.map(c => c.toJSON())});
})

export default router