// we use dotenv to hide important information
require("dotenv").config();

// process.env.THE NAME OF THE INFO YOU SAVED IN THE FILE  will have you the information
const config = {
  port: process.env.PORT,
};

module.exports = config;
