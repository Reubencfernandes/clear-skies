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
  LocationData.find({}).sort({Count : -1}).then((list) => {
    res.json(list)
    console.log(list[0])
  })
})
app.get("/UpdateCount/:name", async (req, res) => {
  const { name } = req.params;
  try {
    const result = await LocationData.findOneAndUpdate(
      { Name: name },
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
  console.log(process.env.KEY)
fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${req.params.id}&appid=${process.env.KEY}`).then((list) => list.json()).then(data => {
console.log(data)
if(data.length !=0)
res.json(data)
else 
  res.status(404).json({ error: 1, message: "Location not found" });

})


})
app.use(express.static("build"));
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
