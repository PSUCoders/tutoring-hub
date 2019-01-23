var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();
const Tutor = require('../models/tutors');


// DELETE
////////////////////////////////////////////////////////////////////////////////////////
/* GET home page. */
router.get('/test', function(req, res, next) {
    Tutor.find({}).then((tutors) => {
        res.send(tutors);
    });
});
  
/* GET home page. */
router.post('/test', function(req, res, next) {
    // const tutor = new Tutor(req.body);
    // tutor.save();

    Tutor.create(req.body).then(
        (tutor) => {
            res.send(tutor);
        }
    );
});
////////////////////////////////////////////////////////////////////////////////////////

router.get('/:id', (req, res, next) => {
    res.send("USER WITH ID " + req.params.id);
});

router.get('/:id/reviews', (req, res, next) => {
    res.send("USER WITH ID REVIEWS " + req.params.id);
});

router.get('/:id/rate', (req, res, next) => {
    res.send("SURVERY FOR TUTOR " + req.params.id);
});

router.post('/:id/rate', (req, res, next) => {
    res.send("SUBMIT SURVERY FOR TUTOR " + req.params.id);
});



module.exports = router;
