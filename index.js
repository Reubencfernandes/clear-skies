const mongoose = require('mongoose')
const cron = require('node-cron');
const LocationData = require('./Database/Information')
const express = require("express")
const path = require('node:path')
const cors = require('cors');
const ForecastFormat = require('./ForecastFormat');
const ChartFormat = require('./ChartFormat');
require('dotenv').config()
require('colors')
const app = express();
const PORT = 80

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
    console.log("GETTING ALL LOCATIONS".blue)
  })
})
app.get("/Sort", (req, res) => {
  LocationData.find({}).sort({Count : -1}).limit(5).then((list) => {
    res.json(list)
    console.log("ACCESSING SORTED LISRT".blue)
  })
})
app.get("/find/:lat/:lon", (req, res) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${req.params.lat}&lon=${req.params.lon}&appid=${process.env.KEY}`)
      .then(response => response.json()).then(info => {
          res.json(info);
          console.log("FInding CURRENT WETHER".blue)
      })
      .catch(error => res.status(500).json({ error: "Error fetching data" }));  
});
app.get("/air/:lat/:lon", (req, res) => {
  fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${req.params.lat}&lon=${req.params.lon}&appid=${process.env.KEY}`)
      .then(response => response.json()).then(info => {
          res.json(info);
          console.log("AIR QUALITY WAS FOUND".blue)
      })
      .catch(error => res.status(500).json({ error: "Error fetching data" }));  
});

app.get("/Update/:name/:lat/:lon/:temp/:flag/:description/", async (req, res) => {
  try {
    const result = await LocationData.findOneAndUpdate(
      { Name: req.params.name }, 
      {
        $inc: { Count: 1 }, 
        $set: { 
          Climate_Info: req.params.description,
          Long: req.params.lon,
          Temperature: req.params.temp,
          Country: req.params.flag,
          Lat: req.params.lat
        }
      },
      { new: true, upsert: true } 
    );

    if (result) {
      console.log("Location updated successfully".blue);
    } else {
      console.log("No document found and none was created".red);
    }
  } catch (err) {
    console.log({ message: "Error updating location", error: err });
  }
});
app.get("/Get/:id",(req,res)=>{
fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${req.params.id}&appid=${process.env.KEY}`).then((list) => list.json()).then(data => {
  res.json(data)
  console.log(`Location Fetched`.blue)
})
})
// Define the route to get the weather forecast
app.get("/forecast/:lat/:lon", (req, res) => {
  const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${req.params.lat}&lon=${req.params.lon}&appid=${process.env.KEY}`;

  fetch(url)
      .then(response => {
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
      })
      .then(data => {
        
          const processedData = ChartFormat.processWeatherData(data);
          const forecast = ForecastFormat.processWeatherData(data.list)
          const obj = {forecast,processedData}

          res.json(obj);
          console.log(`Forecast Fetched`.blue)
      })
      .catch(error => {
          console.error('Error fetching data: ', error);
          res.status(500).send("An error occurred while fetching data.");
      });
});
app.use(express.static("build"));
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
}); 
// update data every 24 hrs
cron.schedule('0 0 * * *', () => { 
try {
  const result = LocationData.find({}).sort({Count : -1}).limit(5).then((list) => {
    list.forEach(async (index)=>{
      try {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${index.Lat}&lon=${index.Long}&appid=${process.env.KEY}`)
      .then(response => response.json()).then(async info => {
        const result = await LocationData.findOneAndUpdate(
          { Name:index.Name }, 
          { 
            $set: { 
              Climate_Info: info.weather[0].description,
              Temperature: info.main.temp,
            }
          },
          { new: true, upsert: true } 
        );
    
        if (result) {
          console.log("24 hr Location updated successfully".blue);
        } else {
          console.log("No document found and none was created".red);
        }
      })
      } catch (err) {
        console.log({ message: "Error updating location", error: err });
      }
    })
  })
  
} catch (err) {
  console.log({ message: "Error updating location", error: err });
}
})