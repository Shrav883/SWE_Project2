import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

//placing orders using COD method

const placeOrder = async (req, res) => {
    try {
        
        const {userId, items, amount, address } = req.body;
        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod:"COD",
            payment:false,
            date: Date.now()
        }
        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId,{cartData:{}})

        res.json({success:true,message:"Order Placed"})

    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
        
    }
}

//placing orders using stripe method
const placeOrderStripe = async (req, res) => {
    
}

//placing orders using Razorpay method
const placeOrderRazorpay = async (req, res) => {
    
}

//All orders data for Admin Panel
const allOrders = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

//User order data for Frontend
const UserOrders = async (req, res) => {
    try {
        
        const {userId} = req.body

        const orders = await orderModel.find({userId})
        res.json({success:true,orders})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

//update order status from admin panel
const updateStatus = async (req, res) => {
    
}

export {placeOrder, placeOrderRazorpay, placeOrderStripe, allOrders, UserOrders, updateStatus}

