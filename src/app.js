import express from 'express';
import handlebars from 'express-handlebars'
import path from 'path';
import { __dirname } from './utils.js';

import productApiRouter from './routers/products/api/products.router.js'
import messageApiRouter from './routers/message/api/messages.router.js'
import cartApiRouter from './routers/carts/api/carts.router.js'

import productViewRouter from './routers/products/views/products.router.js'
import messageViewRouter from './routers/message/views/messages.router.js'
import cartViewRouter from './routers/carts/views/carts.router.js'

const app= express();

app.use(express.json());
app.use(express.urlencoded({ extended : true}));
app.use(express.static(path.join(__dirname,'../public')))

app.engine('handlebars', handlebars.engine());
app.set('views', path.join(__dirname,'./views'));
app.set('view engine', 'handlebars');

app.use('/', productViewRouter, messageViewRouter, cartViewRouter);
app.use('/api', productApiRouter, messageApiRouter, cartApiRouter);

app.use((error, req, res, next)=>{
    const message = `Ah ocurriod un error inesperado ${error.message}`;
    console.log(message);
    res.status(500).json(message);
})

export default app;