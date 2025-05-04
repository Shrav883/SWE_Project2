import express from 'express'
import {placeOrder, placeOrderRazorpay, placeOrderStripe, allOrders, UserOrders, updateStatus} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router()

//Admin features
orderRouter.post('list',adminAuth, allOrders)
orderRouter.post('/status', adminAuth, updateStatus)

//Payment features
orderRouter.post('/place',placeOrder)
orderRouter.post('/stripe',authUser, placeOrderStripe)
orderRouter.post('/razorpay',authUser,placeOrderRazorpay)

//user feature
orderRouter.post('/userorders',authUser,UserOrders)

export default orderRouter