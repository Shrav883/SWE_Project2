

//add products to user cart

import userModel from "../models/userModel.js"

const addToCart = async (req,res) => {
    try {
        const { userId,itemId, ticketType } = req.body

        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;

        if(cartData[itemId]) {
            if(cartData[itemId][ticketType]) {
                cartData[itemId][ticketType] += 1
            }
            else {
                cartData[itemId][ticketType] = 1
            }
        } else {
            cartData[itemId] = {}
            cartData[itemId][ticketType] = 1
        }

        await userModel. findByIdAndUpdate(userId, {cartData})
        res.json({success:true, message:"Added to Cart"})

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message })
        
    }
}

//update user cart

const updateCart = async (req,res) => {
    try {
        const {userId, itemId, ticketType, quantity } = req.body

        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;

        cartData[itemId][ticketType] = quantity

        await userModel. findByIdAndUpdate(userId, {cartData})
        res.json({success:true, message:"Cart Updated"})


    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message })
        
    }
}

//get user cart data

const getUserCart = async (req,res) => {
    
    try {
        
        const { userId } = req.body

        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;

        res.json({success:true, cartData})

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message })
        
    }
}

export { addToCart, updateCart, getUserCart }