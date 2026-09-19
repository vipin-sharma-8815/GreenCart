import express from 'express'
import authSeller from '../middlewares/authSeller.js'
import { placeOrderCod, getAllOrders, getUserOrders, placeOrderStripe } from '../controllers/orderController.js'
import authUser from '../middlewares/authUser.js'



const orderRouter = express.Router()



orderRouter.post('/cod', authUser, placeOrderCod)
orderRouter.get('/user', authUser, getUserOrders)
orderRouter.get('/seller', authSeller, getAllOrders)
orderRouter.post('/stripe', authUser, placeOrderStripe)
export default orderRouter