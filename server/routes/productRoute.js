import express from 'express'
import { addProduct, changeStock, productById, productList } from '../controllers/productController.js'
import { upload } from '../configs/multer.js'
import authSeller from '../middlewares/authSeller.js'


const productRouter = express.Router()


// Add Product : /api/product/add
productRouter.post('/add', authSeller, upload.array(['images']), addProduct)


// Get Product : /api/product/list
productRouter.get('/list', productList)


// Get single Product : /api/product/:id
productRouter.get('/:id', productById)


// Change Product inStock : /api/product/stock
productRouter.post('/stock', authSeller, changeStock)


export default productRouter