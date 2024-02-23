import {validateProductData} from "../utils/validators.js"
import { Product } from "../models/products.js"

export const getProducts = async (req, res) => {
    try{
        const products = await Product.findAll()
        if (products.length === 0) {
            return res.status(404).json({message: "products not found"})
        }
        res.status(200).json({data: products})
    }
    catch(error) {
        res.status(500).json({message: error.message})
    }
}

export const getProductById = async (req, res) => {
    const {id} = req.params
    try {
        const product = await Product.findByPk(id)
        if(!product) {
            return res.status(404).json({message: "product not found"}) 
        }
        res.status(200).json({data:product})
        
    } catch (error) {
        res.status(500).json({message: error.message})        
    }
}

export const createProduct = async (req, res) => {
    const {title, description, status} = req.body

    if (!validateProductData(title, description, status)) {
        return res.status(400).json({ message: "Invalid product data" });
    }
    try {
        const productToAdd = await Product.create({
            title: title, 
            description: description, 
            status: status
        })
        if(!productToAdd){
           return res.status(404).json({message:"Unable to create product"})
        }
            res.status(201).json({message:"product created succesfully", data:productToAdd})
    } catch(e) {
        res.status(500).json({message: e.message})
    }
}

export const updateProductById = async (req, res) => {
    const {id} = req.params;
    const {title, description, status} = req.body;
    try {
        const productToUpdate = await Product.findByPk(id)
        if (!productToUpdate) {
           return res.status(404).json({ message: "Product not found" });
        }
        await productToUpdate.update({
            title,
            description,
            status,
        });
        res.status(200).json({message: "Product updated succesfully", data: productToUpdate})

    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

export const deleteProductById = async (req, res) => {
    const { id } = req.params;

    try {
        const productToDelete = await Product.findByPk(id);
        
        if (!productToDelete) {
            return res.status(404).json({ message: "Product not found" });
        }
        await productToDelete.destroy();
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};