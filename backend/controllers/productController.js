import { v2 as cloudinary } from "cloudinary";
import productModel from '../models/productModel.js';

//function for add product
const addProduct = async (req,res) => {
    try {

        const { name, description, price, category, director, main_actors, bestseller, release_date } = req.body

        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]

        const images= [image1,image2,image3,image4].filter((item)=> item !== undefined)

        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path,{resource_type:'image'});
                return result.secure_url
            })
        )

        const actorsArray = main_actors ? main_actors.split(',').map(actor => actor.trim()) : [];
        const productData = {
            name,
            description,
            price: Number(price),
            image: imagesUrl,
            category,
            director,
            main_actors: actorsArray,
            release_date: Date.now(),
            bestseller: bestseller === "true" ? true : false
        }

        console.log(productData);

        const product = new productModel(productData);
        await product.save()

        res.json({success:true, message:"Product Added"})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }


}

//function for list product
const listProduct = async (req,res) => {
    try {

        const products = await productModel.find({});
        res.json({success:true,products})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

//function for removing product
const removeProduct = async (req,res) => {
    try {
        await productModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"Product Removed"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

//function for single product info
const singleProduct = async (req,res) => {
    try {

        const {productId} = req.body
        const product = await productModel.findById(productId)
        res.json({success:true,product})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

export { listProduct, addProduct,removeProduct, singleProduct }