import {Router} from 'express';
import ProductManager from '../../../dao/productsManager.js';
import { uploader } from '../../../utils.js';

const router = Router();

router.get('/products', async(req, res)=>{
    const {query = {}} = req;
    const products = await ProductManager.get(query);
    res.status(200).json(products);
})


router.post('/products', uploader.single('thumbnails') ,async(req,res)=>{
    const urlIMG= 'http://localhost:8080/img';
    const {body, file} = req;
    const newProduct = {
        ...body,
        status:true,
        thumbnails: file ? `${urlIMG}/${file.filename}` : ''
    }
    const product = await ProductManager.create(newProduct);
    res.status(201).json(product);
})

export default router;