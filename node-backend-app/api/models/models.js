const mongoose = require('mongoose');

const flightSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    from: String,
    To: String,
    startDate: Date,
    endDate: Date,
    numberOfSeats: Number,
    takenSeats: Number,
    price: Number,
    flightTime: Number
});
const Flight = mongoose.model('Flight', flightSchema);

const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    flightInfo: [{type: mongoose.Schema.Types.ObjectId, ref: Flight}]
});


module.exports = mongoose.model('Order', orderSchema);
module.exports = mongoose.model('Flight', flightSchema);