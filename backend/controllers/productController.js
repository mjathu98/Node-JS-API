const productModel = require('../models/productModel');

//Get Products API=> /api/v1/products
//Add Function
exports.getProducts = async (req, res, next) => {
    const products = await productModel.find({});
    res.json({
        success: true,
        products
    })
}


//Get Single Product API=> /api/v1/product/:id
exports.getSingleProducts = async (req, res, next) => {

    try {
        const product = await productModel.findById(req.params.id);
        res.json({
            success: true,
            products
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: 'Unable to get Product with that ID'
        })
    }
} 