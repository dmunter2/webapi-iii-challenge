const express = require('express');
const db = require('./postDb');
const router = express.Router();

router.get('/', (req, res) => {
    db.get()
        .then(posts => {
            res.status(200).json(posts)
        })
        .catch(() => {
            res.status(404).json({error: 'network error'})
        })
});

router.get('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

// custom middleware

function validatePostId(req, res, next) {

};

module.exports = router;