const express = require("express");
const morgan = require("morgan");

const app = express();

// 1. MIDDLEWARES
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

//you can access it locally like this: 127.0.0.1:3000/overview.html
app.use(express.static(`${__dirname}/public`));

module.exports = app;
