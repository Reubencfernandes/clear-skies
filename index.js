const mongoose = require('mongoose')
const LocationData = require('./Database/Information')
const express = require("express")
const path = require('node:path')
const cors = require('cors');
require('dotenv').config()
require('colors')
const app = express();
const PORT = 10

const url =
  `mongodb+srv://${process.env.MONGO}.v5huydu.mongodb.net/clearskies?retryWrites=true&w=majority`;
mongoose
  .connect(url)
  .then((ans) => { 
    console.log("Connected To MongoDb Successfully".green);
  })
  .catch((_err) => {
    console.log("Error in the Connection To MongoDB".red);
  });
  app.use(cors());
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`.red))
app.get("/GetLocations", (req, res) => {
  LocationData.find({}).sort({_id : -1}).then((list) => {
    res.json(list)
    console.log(list[0])
  })
})
app.get("/find/:lat/:lon", (req, res) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${req.params.lat}&lon=${req.params.lon}&appid=${process.env.KEY}`)
      .then(response => response.json()).then(info => {
          res.json(info);
      })
      .catch(error => res.status(500).json({ error: "Error fetching data" }));  // Added error handling
});
app.get("/air/:lat/:lon", (req, res) => {
  fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${req.params.lat}&lon=${req.params.lon}&appid=${process.env.KEY}`)
      .then(response => response.json()).then(info => {
          res.json(info);
      })
      .catch(error => res.status(500).json({ error: "Error fetching data" }));  // Added error handling
});

app.get("/UpdateCount/:name/:lat/:lon", async (req, res) => {
  const { name } = req.params;
  try {
    const result = await LocationData.findOneAndUpdate(
      { Name: name },
      {lat:lat},
      {lon:lon},
      { $inc: { Count: 1 } },
      { new: true, upsert: true }
    );
    if (result) {
      console.log({ message: "Count updated successfully", count: result.Count });
    } else {
      console.log({ message: "No document found and none was created" });
    }
  } catch (err) {
    console.log({ message: "Error updating count", error: err });
  }
});

app.get("/Get/:id",(req,res)=>{
fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${req.params.id}&appid=${process.env.KEY}`).then((list) => list.json()).then(data => {
  res.json(data)
})


})
app.use(express.static("build"));
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
