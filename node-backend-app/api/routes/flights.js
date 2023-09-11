const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Flight = require('../models/models');

router.get('/', (req,res, next) =>{
    Flight.find()
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
    const flight = new Flight({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        from: req.body.from,
        to: req.body.to,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        numberOfSeats: req.body.numberOfSeats,
        takenSeats: req.body.takenSeats,
        price: req.body.price,
        flightTime: req.body.flightTime
    });
    flight
    .save()
    .then(result => {
        console.log(result)
        res.status(200).json({
            message: 'handlign post request to /flights',
            createdFlight: flight
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});



router.get('/:flightId', (req,res, next) =>{
    const id = req.params.flightId;
    Flight.findById(id)
    .exec()
    .then(doc => {
        console.log(doc);
        if (doc) {
            res.status(200).json({doc});
        } else {
            res.status(404).json({message: 'No valid entry found for provided ID'});
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
});


router.delete('/:flightId', (req,res,next) =>{
    const id = req.params.flightId;
    Flight.deleteOne({_id: id})
    .exec()
    .then(result =>{
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

module.exports = router