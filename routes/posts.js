const express = require('express');
const Post = require('../models/Post');
const router = express.Router();
router.post('/', async (req, res, next) => {
    try {
        const { product_id, name, stock } = req.body;
        const products = await Post.create({
            product_id,
            name,
            stock
        });
        res
            .status(200)
            .json({
                code: 0,
                msg: "success",
                data: products
            });
    } catch (err) {
        return next(err);
    }

});
router.get('/', async (req, res, next) => {
    const product =await Post.find();
    try {
     res
    .status(200)
    .json({
        code: 0,
        msg: "success",
        data: product
    });
    } catch (err) {
        return next(err)
    }
});

module.exports = router;