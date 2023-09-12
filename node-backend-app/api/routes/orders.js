const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Order = require('../models/order');
const Flight = require('../models/flight')

router.get('/', (req,res, next) =>{
    Order.find()
    .exec()
    .then(order => {
        console.log(order);
        res.status(200).json(order);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    });
});




router.post('/', (req,res, next) =>{
    Flight.findById(req.body.flightId)
        .then(flight =>{
            if (flight){
                const order = new Order({
                    _id: new mongoose.Types.ObjectId(),
                    flightId:req.body.flightId
                });
        order.save()
    .then(result => {
        console.log(result);
        res.status(201).json({
            message: "Order stored",
            createdOrder: {
                _id: result._id,
                flight: result.flightId
            }
        });
    })
        .catch(err =>{
            console.log(err);
            res.status(500).json({
                error: err
        });
    });
    }
    else{
        return res.status(404).json({
            message: "procut not found"
        });
    }
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