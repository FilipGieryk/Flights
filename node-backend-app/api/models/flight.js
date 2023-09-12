const mongoose = require('mongoose');


const flightSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String, required: true},
    from: {type: String, required: true},
    to: {type: String, required: true},
    startDate: {type: Date, required: true},
    endDate: {type: Date, required: true},
    numberOfSeats: {type: Number, required: true},
    price: {type: Number, required: true},
    flightTime: {type: Number, required: true}
});

module.exports = mongoose.model('Flight', flightSchema);
