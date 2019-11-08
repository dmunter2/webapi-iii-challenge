const express = require('express');
const postsdb = require('./postDb');
const router = express.Router();

router.get('/', (req, res) => {
    postsdb.get()
        .then(posts => {
            res.status(200).json(posts)
        })
        .catch(() => {
            res.status(404).json({error: 'network error'})
        })
});

router.get('/:id', (req, res) => {
    const {id} = req.body.id
    console.log(req.body)
    db.getById(id)
    .then(posts => {
        res.send(200).json({message: 'yep'})
    })
    .catch(500).json({message: 'error, did not work'})
});


router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

// custom middleware

function validatePostId(req, res, next) {
    

};

module.exports = router;