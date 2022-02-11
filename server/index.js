const express = require("express");
const app = express();

// Here we use the concept of midleware to capture the error
// using next() we are making the function move to continue searching
// if we send information to the next function its gonna jump to the error
app.use((req, res, next) => {
  next({
    statusCode: 500,
    message: "Error",
  });
});

// we make an endpoint
app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

// here is another example of endpoint
app.get("/users", (req, res) => {
  res.json({
    message: "Hello Users",
  });
});

app.use((req, res) => {
  res.status(404);
  res.json({
    message: "Not Found",
  });
});

//this is the middleware we are gonna use of the errors
app.use(function (err, req, res) {
  const { statusCode = 500, message = "" } = err;
  res.status(statusCode);
  res.json({ message });
});

// this is the way we export
module.exports = app;
