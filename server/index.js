const express = require('express');
const bodyParser = require('body-parser');
const fC = require('./controllers/favoritesController')
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
let list = [];

app.get("/api/favorites", fC.read)
app.post("/api/favorites", fC.post)
app.delete("/api/favorites/:id", fC.delete)
app.put("/api/favorites/:id", fC.update)
app.get("/api/codewisdom", (req, res) => {
    axios.get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=CodeWisdom&count=1", {
        headers: {
            Authorization: ``
        }
    }).then((response) => {
        list = response.data[0].text;
    })
    res.status(200).json(list)
})

const port = 4000;
app.listen(port, () => console.log(`Server is running on port ${port}`))