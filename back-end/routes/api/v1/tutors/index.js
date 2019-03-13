const express = require('express');
const router = express.Router({
    mergeParams: true
});

var Tutor = require('../../../../models/tutors');

router.get('/', (req, res, next) => {
    Tutor.find({}, function (err, tutors) {
        if (err) {
            console.log(err);
            return;
        }
        res.send(tutors);
    });
});

router.post('/create', function (req, res) {
    // console.log(res);
    if (!req.body) {
        res.status(400);
        res.send("There was an error creating the tutor: no data found\n");
        return;
    }
    Tutor.create(req.body).then(
        (tutor) => {
            res.send(tutor);
        }
    );
});

router.get('/create', function (req, res) {
    res.send("Creating a tutor requires a POST request, not a GET request");
});

router.post('/remove/:tutorID', function (req, res, next) {
    Tutor.find({
        _id: req.params.tutorID
    }).deleteOne().exec(function (err, data) {
        if (err) {
            console.log(err);
            return;
        }
        res.send("Removed tutor with id: " + req.params.tutorID);
    });
});

router.get('/remove/:tutorID', function (req, res) {
    res.send("Removing a tutor requires a POST request, not a GET request");
});

router.get('/:tutorID', (req, res, next) => {
    Tutor.findById(req.params.tutorID, function (err, result) {
        res.json(err ? [] : result);
    });
});


module.exports = router;