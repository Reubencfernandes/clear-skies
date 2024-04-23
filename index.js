const mongoose = require('mongoose')
const express = require('express')
const path = require("node:path");
const app = express();

const cors = require("cors");
require("colors");
const url =
  "mongodb+srv://reubencf:123@reodiscord.v5huydu.mongodb.net/reo?retryWrites=true&w=majority";
mongoose
  .connect(url)
  .then((ans) => {
    console.log("Connected To MongoDb Successfully".green);
  })
  .catch((_err) => {
    console.log("Error in the Connection To MongoDB".red);
  });
  app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
  const PORT = 8000;
  app.listen(PORT, () => {
    console.log(`Running Project on PORT ${PORT}`);
  });
  app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, "build", "index.html"));
  })
  