const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());

const fetchWeather = async (lat, lon) => {
    const res = await axios(
        `http://api.weather.yandex.ru/v2/forecast?lat=${lat}&lon=${lon}`, {
            headers:{
              "X-Yandex-API-Key": "fe70a1e6-71d9-47cb-b9b8-dcf7d9413f56",
            }
        }
    );
    return res.data
} 

app.get('/weather', async (req, res) => {
  const data = await fetchWeather()
  res.json(data)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})