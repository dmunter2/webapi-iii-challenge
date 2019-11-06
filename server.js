const express = require('express');
const helmet= require('helmet');
const postRouter = require('./posts/postRouter');
const morgan = require('morgan');


const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));
server.use(logger);

server.use('/api/post', postRouter)


server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

//custom middleware

function logger(req, res, next) {
  console.log(`${req.method} Request`);
  next();
};

module.exports = server;
