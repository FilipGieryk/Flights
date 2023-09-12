const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    flightId: {type: mongoose.Schema.Types.ObjectId, ref: 'Flight', required: true}
});

module.exports = mongoose.model('Order', orderSchema);