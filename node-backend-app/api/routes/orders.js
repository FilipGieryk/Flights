const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Order = require('../models/order');

router.get('/', (req,res, next) =>{
    Order.find()
    .exec()
    .then(docs => {
        console.log(docs);
        res.status(200).json(docs);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    });
});




router.post('/', (req,res, next) =>{
    const order = new Order({
        _id: new mongoose.Types.ObjectId(),
    });
});




router.get('/:orderId', (req,res, next) =>{
    res.status(200).json({
        message: 'order detail',
        orderId: req.params.orderId
    });
});

router.post('/:orderId', (req,res, next) =>{
    res.status(200).json({
        message: 'order detail',
        orderId: req.params.orderId
    });
});


router.delete('/:orderId', (req,res,next) =>{
    res.status(200).json({
        message: 'order deleted',
        orderId: req.params.orderId
    });
});

module.exports = router