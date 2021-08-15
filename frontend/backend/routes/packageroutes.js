const express = require('express');
const router = express.Router();

const package = require('../models/package.model');

router.route('/add').post((req, res) => {
    const { planName, amountType, minimumAmount, maximumAmount, interest, every, returnFor, capitalBack, status, Featured, amount
        , howManyTimes } = req.body;

    const newPackage = new package({
        planName,
        amountType,
        minimumAmount,
        maximumAmount,
        interest,
        amount,
        every,
        returnFor,
        howManyTimes,
        capitalBack,
        status,
        Featured
    })

    newPackage.save()
        .then(() => res.json('PackageAdded!'))
        .catch(err => res.status(400).json('Error: ' + err));

});


router.route('/').get((req, res) => {

    package.find()
        .then(data => res.json(data))
        .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;

