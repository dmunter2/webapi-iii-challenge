const express = require('express');
const userdb = require('./userDb');
const postsdb = require('../posts/postDb');

// const postsdb = require('./postDb');
const router = express.Router();


router.post('/', (req, res) => {
    const user = req.body
    userdb.insert(user)
    .then(user => {
        res.status(200).json({message: 'user has been added'})
    })
    .catch(err => {
        res.status(500).json({success: false, message: 'user not added'})
    })

});



router.post('/:id/posts', (req, res) => {
    postsdb.insert(req.body)
    .then(user => {
        res.status(200).json({message: 'it worked'})
    })
    .catch(err => {
        res.status(500).json({message: 'didnt work'})
    })
});




router.get('/', (req, res) => {
    userdb.get()
    .then(user => {
        res.status(200).json(user)
    })
    .catch(err => {
        res.status(500).json({message: "there was an error"})
    })
});



router.get('/:id', (req, res) => {
    const userID = req.params.id
    userdb.getById(userID)
    .then(name => {
        res.status(200).json(name)
    })

});

router.get('/:id/posts', (req, res) => {
    const userID = req.params.id
    postsdb.getById(userID)
    .then(user => {
        res.status(200).json(user)
    })
    .catch(err => {
        res.status(500).json({message: 'failuree'})
    })

});

router.delete('/:id', (req, res) => {
    const userID = req.params.id 
    userdb.remove(userID)
    .then(user => {
        res.status(200).json({message: ` User number ${req.name} has been deleted`})
    })
    .catch(err => {
        res.status(500).json({message: 'nope'})
    })
});

router.put('/:id', (req, res) => {
    const userID = req.params.id
    const body = req.body
    userdb.update(userID, body)
    .then(user => {
        res.status(200).json({message: "worked"})
    })
    .catch(err => {
        res.status(500).json({error: 'this is error'})
    })
});

//custom middleware

function validateUserId(req, res, next) {

};

function validateUser(req, res, next) {

};

function validatePost(req, res, next) {

};

module.exports = router;
