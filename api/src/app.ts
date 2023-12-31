const express = require('express');
const morgan = require('morgan');
const AppError = require('./utils/appError');

const app = express();

// 1. MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

//error handler to catch the bad url requests
//when a user hits an url that doesnt exist
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
  //it will always assume that what we pass to the next its gona be an error
  //and if there are other middlewares it will skip them, and jump us to the error handling middleware
});

module.exports = app;
