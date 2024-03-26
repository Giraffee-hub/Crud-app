const express = require("express");
const Product = require("../models/product.model.js");

// Get All Products
const getProducts = async (req, res) => {
    try{
    const products = await Product.find({});
    res.status(200).json(products);
  } catch {
    res.status(500).json({message: error.message});
  }
};

// Get One Product
const getSingleProduct = async (req, res) => {
    try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);

  } catch (error) {
    res.status(500).json({message: error.message});
  }  
};

// App Product
const addProduct = async (req, res) => {
    try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch {
    res.status(500).json({message: error.message});
  }
};

// Update Product
const updateProduct = async (req, res) => {
    try {
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    
    if(!product) {
      return res.status(404).json({message: "Product Not Found"});
    }

    const updateProduct = await Product.findById(id); // To Git The Product From DataBase
    res.status(200).json(updateProduct);
    
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

// Delete Product
const deleteProduct = async (req, res) => {
    try {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({message: "Product Not Found"});
    }

    res.status(200).json({message: "Product Deleted Successfully"});
    
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};



module.exports = {
  getProducts,
  getSingleProduct,
  addProduct,
  updateProduct,
  deleteProduct
};


