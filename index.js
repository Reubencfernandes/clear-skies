const mongoose = require('mongoose')
const LocationData = require('./Database/Information')
const express = require("express")
const path = require('node:path')
const dotenv = require("dotenv")
require('colors')
const app = express();
const PORT = 80

const url =
  `mongodb+srv://${process.env.MONGO}.v5huydu.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`;
mongoose
  .connect(url)
  .then((ans) => {
    console.log("Connected To MongoDb Successfully".green);
  })
  .catch((_err) => {
    console.log("Error in the Connection To MongoDB".red);
  });
app.listen(PORT,() => console.log(`Listening on PORT ${PORT}`.red))
app.use(express.static("build"));
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});