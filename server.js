const express = require('express');
const helmet= require('helmet');
const postRouter = require('./posts/postRouter');
const userRouter = require('./users/userRouter');
const morgan = require('morgan');


const server = express();
server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));
server.use(logger);
server.use(atGate);
// server.use(auth);
server.use('/api/post', postRouter)
server.use('/api/user', userRouter)


server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

// server.get('/mellon', auth, (req, res) => {
//   console.log('this works');
//   res.send('you made it!');
// });

//custom middleware

// function(req,res) {
//   res.status(404).send('this is middleware')
// }
// server.use(function(req,res) {
//   res.status(404).send('this is middleware')
// })







function logger(req, res, next) {
  console.log(`${req.method} Request`);
  next();
};


function atGate(req, res, next) {
  console.log('this is a gate')
  next();
}

// function auth(req, res, next) {
//   if(req.url === '/mellon') {
//     next();
//   } else {
//     res.send('You cant pass dis')
//   }
// }






module.exports = server;
