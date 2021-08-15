const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const packageSchema = new Schema({
    planName: String,
    amountType: String,
    minimumAmount: String,
    maximumAmount: String,
    interest: String,
    amount: String,
    every: String,
    returnFor: String,
    howManyTimes: String,
    capitalBack: String,
    status: String,
    Featured: String

}, {
    timestamps: true
});

const package = mongoose.model('Package', packageSchema);

module.exports = package;