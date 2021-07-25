// const router = require('express').Router()
import express from 'express';
import { getProducts, createProduct, deleteProduct, updateProduct } from '../controllers/productCtrl.js'
import auth from '../middleware/auth.js'
import authAdmin from '../middleware/authAdmin.js'


var router = express.Router();

router.route('/products')
    .get(getProducts)
    .post(auth, authAdmin, createProduct)


router.route('/products/:id')
    .delete(auth, authAdmin, deleteProduct)
    .put(auth, authAdmin, updateProduct)



export default router